import styled, { css } from 'styled-components/macro';

export const TextBox = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  top: 30px;
  left: 0;
  width: 350px;
  padding: 25px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.01px;
  border: 1px solid var(--white);
  border-radius: 16px;
  background: #25214f;
  z-index: 10;

  .light & {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background: var(--white);
  }

  ${({ rightalign }) =>
    rightalign &&
    css`
      left: auto;
      right: 0;
    `}
`;

export const ChartTooltipBlock = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;

  p {
    margin: 0 0 10px;

    &:last-child {
      margin: 0;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    font-size: 13px;
    border-radius: 50px;
    color: var(--white);
    background: #1ebcec;
  }

  &:hover ${TextBox} {
    visibility: visible;
    opacity: 1;
  }

  .title {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    margin: 0 0 13px;

    img {
      display: inline-block;
      vertical-align: top;
    }
  }

  .purchase-list {
    display: flex;
    list-style: none;
    margin: 0 -10px;
    padding: 0;

    li {
      margin: 0 10px;
    }
  }
`;
