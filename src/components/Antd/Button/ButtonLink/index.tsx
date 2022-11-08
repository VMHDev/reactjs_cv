import React, { ReactNode } from 'react';
import { ButtonLinkStyled, UnderlineGreenStyled } from './styled';

interface ButtonLinkProps {
  className?: string;
  classNameText?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    className = '',
    classNameText = '',
    htmlType = 'button',
    loading = false,
    disabled = false,
    icon,
    children,
    onClick = () => null,
  } = props;
  return (
    <ButtonLinkStyled
      $isLoadingStyled={loading}
      block
      className={className}
      disabled={disabled || loading}
      htmlType={htmlType}
      loading={loading}
      icon={icon}
      onClick={onClick}
    >
      <UnderlineGreenStyled className={classNameText}>{children}</UnderlineGreenStyled>
    </ButtonLinkStyled>
  );
};

export default ButtonLink;
