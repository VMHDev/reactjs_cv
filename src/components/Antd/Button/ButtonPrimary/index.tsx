import React, { ReactNode } from 'react';
import { ButtonPrimaryStyled } from './styled';

interface AntdButtonPrimaryProps {
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

const AntdButtonPrimary = (props: AntdButtonPrimaryProps) => {
  const {
    className = '',
    htmlType = 'button',
    loading = false,
    disabled = false,
    icon,
    children,
    onClick = () => null,
  } = props;
  return (
    <ButtonPrimaryStyled
      $isLoading={loading}
      block
      className={className}
      disabled={disabled || loading}
      htmlType={htmlType}
      loading={loading}
      icon={icon}
      onClick={onClick}
    >
      {children}
    </ButtonPrimaryStyled>
  );
};

export default AntdButtonPrimary;
