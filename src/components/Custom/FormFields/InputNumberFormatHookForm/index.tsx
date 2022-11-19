import { Form } from 'antd';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import Text from 'src/components/Custom/Text';
import { NumberFormatStyled } from './styled';

export interface InputCurrencyProps extends React.ComponentProps<typeof NumberFormat> {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  maxCharacter?: number;
  classNameInput?: string;
  classNameLabel?: string;
  prefix?: string;
  suffix?: string;
  thousandSeparator?: string | boolean;
  decimalScale?: number;
  disabled?: boolean;
  isVertical?: boolean;
  isRequired?: boolean;
  messageError?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}
const InputNumberFormatHookForm = ({
  name,
  control,
  label,
  placeholder,
  defaultValue,
  min,
  max,
  maxCharacter,
  classNameInput = '',
  classNameLabel = '',
  prefix,
  suffix,
  thousandSeparator,
  decimalScale,
  disabled = false,
  isVertical = false,
  isRequired = false,
  messageError,
  onFocus,
  ...rest
}: InputCurrencyProps) => {
  const {
    field: { onBlur, onChange, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Form.Item
      className={`glbFormItem ${isVertical && 'glbFormItemVertical'}`}
      label={
        label && (
          <Text
            className={`${
              !isVertical && messageError && 'glbFormTextLabelError'
            } ${classNameLabel}`}
          >
            {label}
          </Text>
        )
      }
      required={isRequired}
      help={error?.message}
      validateStatus={invalid ? 'error' : 'success'}
      initialValue={defaultValue}
    >
      <NumberFormatStyled>
        <NumberFormat
          name={name}
          value={value}
          placeholder={placeholder}
          className={
            invalid || (messageError && messageError !== '')
              ? 'error'
              : classNameInput
              ? classNameInput
              : 'numberInput'
          }
          min={min}
          max={max}
          maxLength={maxCharacter}
          decimalScale={decimalScale}
          prefix={prefix}
          suffix={suffix}
          thousandSeparator={thousandSeparator}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={ref}
          {...rest}
        />
      </NumberFormatStyled>
      {messageError && <span className="glbFormTextError">{messageError}</span>}
    </Form.Item>
  );
};

export default InputNumberFormatHookForm;
