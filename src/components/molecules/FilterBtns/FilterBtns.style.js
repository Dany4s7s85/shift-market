import styled from 'styled-components/macro';
import Select from '../../atoms/Select';

export const FiltersHolder = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;

  .btn-clear {
    display: inline-block;
    margin-top: 15px;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`;

export const SelectStyled = styled(Select)`
  /* display: none; */
  width: 160px;
  margin: 0 3px;
  color: var(--primary-text-color);
`;

export const BtnsList = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 15px auto;
  border-radius: 5px;
  background: #272350;
`;

export const Button = styled.button`
  display: block;
  min-width: 60px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: var(--white);
  text-transform: capitalize;
  padding: 8px 10px;
  margin: 0 1px;
  border-radius: 5px;
  text-align: center;
  background: none;

  &:hover,
  &.active {
    color: var(--black);
    background: #23c1ef;
  }

  &.btn-calendar {
    min-width: 40px;
  }
`;
