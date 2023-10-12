import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';

import { components } from 'react-select';

import { debounce } from 'lodash';
import { StyledFormGroup } from '../../../styles/helpers.styles';
import { Error, InputHolder } from '../../molecules/Field/Field.styles';
import { StyledSelect, StyledSelectAsync } from './Select.styles';
import InputIcon from '../InputIcon';
import Label from '../Label';

function DropdownIndicator(props) {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <InputIcon $suffix>
          <i className="material-icons-outlined">expand_more</i>
        </InputIcon>
      </components.DropdownIndicator>
    )
  );
}

function Select({
  prefix,
  suffix,
  disabled,
  invalid,
  options,
  label,
  noMargin,
  error,
  rules,
  clear,
  async,
  width,
  selectStyled,
  onSearch = () => {},
  ...props
}) {
  const debouncedRef = React.useRef(0);
  const loadOptions = async __ => {
    const _options = await new Promise(resolve => {
      debounce(value => {
        debouncedRef.current += 1;
        const LocalRef = debouncedRef.current;
        setTimeout(() => {
          if (LocalRef === debouncedRef.current) {
            props.loadOptions(value).then(response => {
              resolve(response);
            });
          }
        }, 300);
      }, 300)(__);
    });
    return _options;
  };

  return (
    <StyledFormGroup $invalid={invalid || error} noMargin={noMargin}>
      {label && (
        <Label
          onClear={() => {
            props?.onChange?.({
              target: {
                value: options[0],
                name: props.name,
              },
            });
          }}
          required={rules?.filter(({ required }) => required).length}
          clear={clear}>
          {label}
        </Label>
      )}
      <InputHolder>
        {prefix && (
          <InputIcon disabled={disabled} prefix={prefix} invalid={invalid || error}>
            {prefix}
          </InputIcon>
        )}
        {async ? (
          <StyledSelectAsync
            {...props}
            $prefix={prefix}
            $suffix={suffix}
            options={options}
            classNamePrefix="react-select"
            loadOptions={loadOptions}
            error={error}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            onChange={value => {
              props?.onChange?.({
                target: {
                  value,
                  name: props.name,
                },
              });
            }}
          />
        ) : (
          <StyledSelect
            {...props}
            $prefix={prefix}
            $suffix={suffix}
            options={options}
            $width={width}
            $selectStyled={selectStyled}
            classNamePrefix="react-select"
            disabled={disabled}
            error={error}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            onChange={value => {
              props?.onChange?.({
                target: {
                  value,
                  name: props.name,
                },
              });
            }}
            onInputChange={text => onSearch({ target: { name: props.name, value: text } })}
          />
        )}
      </InputHolder>

      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

export default Select;
