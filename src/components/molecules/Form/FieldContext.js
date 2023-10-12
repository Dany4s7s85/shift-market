import { createContextHook } from 'use-context-hook';

const fun = () => {};

const Context = createContextHook({
  getFieldValue: fun,
  getFieldError: fun,
  getFieldsValue: fun,
  setFieldsValue: fun,
  registerField: fun,
  submit: fun,
});

export default Context;
