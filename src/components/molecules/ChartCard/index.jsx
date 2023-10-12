import {
  StyledChartCard,
  Title,
  CardHead,
  TitleHolder,
  Value,
  ToggleHolder,
  OptionMenuHolder,
} from './ChartCard.styles';

function ChartCard({ title, value, children, toggle, optionsMenu, ...props }) {
  return (
    <StyledChartCard {...props}>
      <CardHead>
        <TitleHolder>
          {title && <Title>{title}</Title>}
          {value && <Value>{value}</Value>}
        </TitleHolder>
        {toggle && <ToggleHolder>{toggle}</ToggleHolder>}
        {optionsMenu && <OptionMenuHolder>{optionsMenu}</OptionMenuHolder>}
      </CardHead>
      {children}
    </StyledChartCard>
  );
}

export default ChartCard;
