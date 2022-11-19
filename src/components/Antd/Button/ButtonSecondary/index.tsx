import React, { ReactNode } from 'react';
import { ButtonSecondaryStyled } from './styled';

interface AntdButtonSecondaryProps {
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

const AntdButtonSecondary = (props: AntdButtonSecondaryProps) => {
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
    <ButtonSecondaryStyled
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
    </ButtonSecondaryStyled>
  );
};

export default AntdButtonSecondary;
