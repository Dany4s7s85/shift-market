import { darken, lighten, cssVar } from 'polished';
import styled, { css, keyframes } from 'styled-components/macro';

export const IconHolder = styled.span``;

const loadingCircle = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const BtnLoader = styled.span`
  margin-right: ${({ $width }) => ($width > 115 || !$width) && '10px'};
  svg {
    animation: ${loadingCircle} 1s linear infinite;
  }
`;

const Styles = css`
  position: relative;
  border: none;
  display: block;
  width: 100%;
  text-align: center;
  padding: var(--btn-padding);
  cursor: pointer;
  color: var(--white);
  border-radius: 14px;
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 0.3125rem);
  font-weight: 700;

  ${IconHolder} {
    margin-left: ${({ $suffix }) => $suffix && '5px'};
    margin-right: ${({ $prefix }) => $prefix && '5px'};
    font-size: var(--font-size-base);
    display: flex;
  }

  ${({ xs }) =>
    xs &&
    css`
      font-size: var(--font-size-xs);
      line-height: 1;
      padding: 0.625rem;
    `}

  ${({ $sm }) =>
    $sm &&
    css`
      padding: 0.8125rem 0.75rem;
      @media (min-width: 992px) {
        padding: 0.8125rem 1.25rem;
      }
    `}

  ${({ $color }) =>
    $color &&
    css`
      background: ${!/[^a-z-]/i.test($color) ? `var(--${$color})` : $color};
      &:hover {
        opacity: 0.6;
      }
    `}

  ${({ $type, $loading }) =>
    $type === 'primary' &&
    css`
      color: var(--dark-blue);
      background: var(--primary-gradient);
      /* box-shadow: 7px 7px 44px rgba(19, 179, 230, 0.15); */
      &:hover {
        opacity: 0.8;
      }
      ${$loading &&
      css`
        ${BtnLoader} {
          svg {
            fill: var(--white);
          }
        }
      `}
    `}
    
  ${({ $type }) =>
    $type === 'warning' &&
    css`
      background: var(--yellow);
      &:hover {
        background: ${darken(0.2, cssVar('--yellow'))};
      }
    `}

    ${({ $type }) =>
    $type === 'dark' &&
    css`
      background: var(--bg-dark);
      &:hover {
        background: ${lighten(0.2, cssVar('--bg-dark'))};
      }
    `}
    ${({ $type }) =>
    $type === 'dark2' &&
    css`
      background: var(--bg-dark);
      border-radius: 50px;
      font-size: 12px;
      padding: 5px 10px;
      min-width: 60px;
      &:hover {
        background: ${lighten(0.2, cssVar('--bg-dark'))};
      }
    `}

  ${({ $type }) =>
    $type === 'danger' &&
    css`
      background: var(--danger);
      border: 1px solid var(--danger);
      &:hover {
        background: ${darken(0.2, cssVar('--danger'))};
      }
    `}

  ${({ $type }) =>
    $type === 'danger2' &&
    css`
      background: var(--danger2);
      &:hover {
        background: ${darken(0.2, cssVar('--danger2'))};
      }
    `}

  ${({ $type }) =>
    $type === 'success' &&
    css`
      background: var(--green);
      &:hover {
        background: ${darken(0.2, cssVar('--green'))};
      }
    `}

  ${({ $type }) =>
    $type === 'secondary' &&
    css`
      color: var(--white);
      background: var(--secondary);
      &:hover {
        background: ${lighten(0.1, cssVar('--secondary'))};
      }
    `}

  ${({ $type }) =>
    $type === 'outline' &&
    css`
      color: var(--secondary-text-color);
      background: none;
      border: 1px solid var(--text-color-gray);
      &:hover {
        border-color: var(--primary);
        color: var(--primary);
      }
    `}

  ${({ $type }) =>
    $type === 'light' &&
    css`
      color: var(--primary-text-color);
      background: var(--light-secondary);
      border: none;
      transition: all var(--animation-speed) ease-in-out;
      &:hover {
        background: var(--primary);
        box-shadow: 0px 4px 14px rgba(104, 92, 182, 0.26);
        color: var(--white);
      }
    `}

  ${({ $type }) =>
    $type === 'white' &&
    css`
      color: var(--secondary-text-color);
      background: var(--white);
      box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.14);
      border: 1px solid var(--border-color);
      transition: box-shadow var(--animation-speed) ease-in-out;
      &:hover {
        box-shadow: 0px 15px 10px rgba(176, 183, 195, 0.2);
      }
    `}

  ${({ $type }) =>
    $type === 'whitePrimary' &&
    css`
      color: var(--primary);
      background: var(--white);
      box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.14);
      transition: box-shadow var(--animation-speed) ease-in-out, background var(--animation-speed) ease-in-out,
        color var(--animation-speed) ease-in-out;
      &:hover {
        box-shadow: 0px 15px 10px rgba(176, 183, 195, 0.2);
        color: var(--white);
        background: var(--primary);
      }
    `}

  ${({ $suffix, $prefix }) =>
    ($suffix || $prefix) &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 75px;
    `}

  ${({ $shape, $size }) =>
    $shape === 'circle' &&
    css`
      border-radius: 100%;
      width: ${$size}px;
      height: ${$size}px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .material-icons-outlined {
        font-size: 18px;
        line-height: 1;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}

  ${({ mobileCircle }) =>
    mobileCircle &&
    css`
      @media (max-width: 767px) {
        border-radius: 100%;
        overflow: hidden;
        width: 46px;
        height: 46px;
        span {
          margin: 0 !important;
        }
        .text {
          display: none;
        }
      }
    `}

  ${({ $iconMobile }) =>
    $iconMobile &&
    css`
      @media (max-width: 1199px) {
        border-radius: 100%;
        width: 35px;
        height: 35px;
        padding: 0;
        margin: 0;
        ${IconHolder} {
          margin: 0;
        }
        .text {
          display: none;
        }
      }
      @media (max-width: 991px) {
        ${IconHolder} {
          color: var(--white);
        }
      }
    `}

  ${({ notification }) =>
    notification &&
    css`
      i {
        font-size: var(--font-size-lg);
        line-height: calc(var(--font-size-lg) + 0.3125rem);
        position: relative;
      }
    `}

  ${({ $width }) =>
    $width &&
    css`
      max-width: ${$width}px;
    `}
  
  ${({ $loading }) =>
    $loading &&
    css`
      padding-left: 10px !important;
      padding-right: 10px !important;
    `}

  

  @media (max-width: 575px) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`;

export const StyledButton = styled.button`
  ${({ $unStyled }) => ($unStyled ? '' : Styles)}
`;

export const LoaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Notification = styled.span`
  background: var(--danger);
  position: absolute;
  top: -4px;
  right: -4px;
  border-radius: 100%;
  width: 17px;
  height: 17px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
