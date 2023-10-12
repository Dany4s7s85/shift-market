import styled, { css } from 'styled-components/macro';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-primary);
  padding: 10px 16px;
  border-radius: 20px;
  position: relative;
  z-index: var(--z-35);
  text-transform: capitalize;

  @media (min-width: 992px) {
    padding: 20px;
  }
  @media (min-width: 1200px) {
    padding: 23px 28px;
  }

  ${({ profile }) =>
    profile &&
    css`
      @media (min-width: 992px) {
        display: none;
      }
    `}
`;

export const ButtonsHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 -5px;

  @media (min-width: 992px) {
    margin: 0 -5px;
  }
  > * {
    margin: 0 5px 0;
    @media (min-width: 992px) {
      margin: 0 5px;
    }
    @media (max-width: 1199px) {
      flex-shrink: 0;
    }
    @media (max-width: 575px) {
      padding: 0;
    }
    @media (min-width: 1200px) {
      &:not(:last-child) {
        width: auto;
        flex-shrink: 0;
      }
    }
  }
  @media (max-width: 991px) {
    [class^='icon-'],
    [class*=' icon-'] {
      color: var(--text-color-gray);
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  color: var(--white);
  font-size: 25px;
  line-height: 1;
`;
