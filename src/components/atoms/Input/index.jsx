import { forwardRef } from 'react';

import { StyledTextarea, StyledInput } from './Input.styles';

const Input = forwardRef(({ ...props }, ref) => {
  const { type, height } = props;
  if (type === 'textarea') {
    return <StyledTextarea {...props} height={height} ref={ref} />;
  }
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
