import React, { ReactNode } from 'react';
import { TextStyled } from './styled';

interface TextProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Text = (props: TextProps) => {
  const { children, className, onClick } = props;
  return (
    <TextStyled onClick={onClick} className={className}>
      {children}
    </TextStyled>
  );
};

export default Text;
