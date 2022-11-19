import React, { ReactNode } from 'react';
import { ButtonTransparentStyled } from './styled';

interface AntdButtonTransparentProps {
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

const AntdButtonTransparent = (props: AntdButtonTransparentProps) => {
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
    <ButtonTransparentStyled
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
    </ButtonTransparentStyled>
  );
};

export default AntdButtonTransparent;
