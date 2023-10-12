import {
  DropDownContainer,
  DropDownButton,
  DropDownList,
  DropDownListContainer,
  ListItem,
  ListButton,
  IconHolder,
} from './Dropdown.styles';

function Dropdown({ options, isOpen, setIsOpen, filter, children, onOptionClick, ...props }) {
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = option => () => {
    setIsOpen(false);
    onOptionClick({ target: { option } });
  };

  return filter ? (
    <div>
      <span>{children}</span>
    </div>
  ) : (
    <DropDownContainer>
      <DropDownButton onClick={toggling} type="primary" size={40} {...props}>
        <i className="icon-options" />
      </DropDownButton>

      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem key={Math.random()}>
                <ListButton type="button" onClick={onOptionClicked(option)}>
                  {option.icon && (
                    <IconHolder>
                      <span className="material-icons-outlined">{option.icon}</span>
                    </IconHolder>
                  )}
                  {option.value}
                </ListButton>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default Dropdown;
