import styled, { css } from 'styled-components/macro';
import { darken, cssVar } from 'polished';
import FakeInput from '../FakeInput';

export const styles = css`
  border: 1px solid var(--light);
  background: var(--dark-blue);
  outline: none;
  height: ${({ sm }) => (sm ? '40px' : '58px')};
  padding: ${({ sm }) => (sm ? '0.3125rem .9375rem' : 'var(--form-element-padding)')};
  width: 100%;
  transition: border var(--animation-speed) ease-in-out;
  color: var(--white);
  font-size: var(--font-size-sm);
  font-weight: 500;
  border-radius: ${({ $rounded }) => ($rounded ? '85px' : '14px')};
  padding-left: ${({ $prefix }) => $prefix && '2.5rem'};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return '2.5rem';
    if ($button) return '3.6rem';
    return '';
  }};

  .light & {
    color: #1c1a42 !important;
    border-color: #d4e5ea;
    background: var(--bg-primary);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #1c1a42 !important;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #1c1a42 !important;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #1c1a42 !important;
    }
  }
  ${({ $invalid }) =>
    $invalid &&
    css`
      border-color: var(--danger) !important;
    `}

  ${({ type }) =>
    type === 'search' &&
    css`
      transition: all var(--animation-speed) ease-in-out;

      ${({ responsive }) =>
        responsive &&
        css`
          @media (max-width: 767px) {
            position: absolute;
            top: -22px;
            right: 7px;
            z-index: 9;
            box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.3);
            background: var(--white);
            border: 1px solid var(--light);
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            width: 0;
          }
          @media (max-width: 575px) {
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
          }
        `}

      ${({ openSearch }) =>
        openSearch &&
        css`
          @media (max-width: 767px) {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            width: 350px;
          }
          @media (max-width: 575px) {
            transform: translateY(0);
            width: 100%;
          }
        `}
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}

  &:focus {
    border-color: ${({ $invalid }) => !$invalid && `${darken(0.1, cssVar('--primary'))}`};
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--white);
    opacity: 0.6;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--white);
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--white);
    opacity: 0.6;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--white);
    opacity: 0.6;
  }
  ${({ bgDark }) =>
    bgDark &&
    css`
      background: var(--bg-dark);
      border: none;
    `}
  ${({ smallRounded }) =>
    smallRounded &&
    css`
      background: #161534;
      border-radius: 40px;
      border: none;
      flex: 1;
    `}
  ${({ bgLight }) =>
    bgLight &&
    css`
      color: var(--white);
      background: linear-gradient(
        268.95deg,
        rgba(41, 37, 88, 0.536345) 4.06%,
        rgba(38, 35, 83, 0.866791) 42.35%,
        rgba(33, 30, 75, 0.50218) 99.53%
      );

      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: var(--white);
        font-weight: 500;
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: var(--white);
        font-weight: 500;
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: var(--white);
        font-weight: 500;
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: var(--white);
        font-weight: 500;
      }
    `}

  &[type='radio'] {
    + ${FakeInput} {
      border-radius: 100%;
      &:before {
        content: '';
        background: var(--white);
        border-radius: 100%;
        width: 10px;
        height: 10px;
      }
    }
  }

  + ${FakeInput} {
    transition: background var(--animation-speed) ease-in-out;
    &:before,
    .icon-check {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity var(--animation-speed) ease-in-out;
    }
  }

  &[type='checkbox'] {
    + ${FakeInput} {
      .icon-check {
        color: var(--white);
        font-size: var(--font-size-sm);
      }
    }
  }

  &[type='checkbox'],
  &[type='radio'] {
    display: none;
    &:checked {
      + ${FakeInput} {
        background: var(--primary);
        .icon-check,
        &:before {
          opacity: 1;
        }
      }
    }
    &:disabled {
      + ${FakeInput} {
        opacity: 0.5;
      }
    }
  }
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  resize: vertical;
  ${({ height }) =>
    height &&
    css`
      min-height: ${height}px;
    `}
`;

export const StyledInput = styled.input`
  ${styles}
`;
