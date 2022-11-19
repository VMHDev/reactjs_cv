import React, { ReactNode } from 'react';
import { LinkStyled } from './styled';

interface LinkProps {
  key: number;
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = (props: LinkProps) => {
  const { key, href, children, className = '' } = props;
  return (
    <LinkStyled
      key={key}
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </LinkStyled>
  );
};

export default Link;
