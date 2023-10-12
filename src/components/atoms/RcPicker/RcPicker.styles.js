import styled, { css } from 'styled-components/macro';
import { RangePicker } from 'rc-picker';
import { styles } from '../Input/Input.styles';

export const StyledRangePicker = styled(RangePicker)`
  ${styles}
  padding-left: 15px;
  padding-right: 30px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled[0] &&
    css`
      background: var(--light);
      cursor: not-allowed;
      border-color: #eee;
      color: var(--light-gray);
    `}

  input {
    border: none;
    outline: none;
    background: none;
    color: var(--white);
    .light & {
      color: #1c1a42;
    }
  }
`;
