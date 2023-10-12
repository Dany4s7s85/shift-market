/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

import { StyledLabel, RequiredAsterisk } from './Label.styles';

function Label({ children, onlyRead, required, labelIcon, optional, clear, noMargin, onClear = () => {}, ...props }) {
  return (
    <StyledLabel noMargin={noMargin} $onlyRead={onlyRead} labelIcon={labelIcon} {...props}>
      <div css="display: flex; justify-content: space-between;">
        <div css="display: flex; align-items: center;">
          {required ? <RequiredAsterisk>*</RequiredAsterisk> : ''}
          {children}
        </div>
        {clear && (
          <span css="color: var(--danger); cursor: pointer;" onClick={onClear}>
            Clear
          </span>
        )}
        {optional && <span css="margin-left: 5px;">Optional</span>}
      </div>
      {labelIcon && <span css="margin-left: 5px;">{labelIcon}</span>}
    </StyledLabel>
  );
}

export default Label;
