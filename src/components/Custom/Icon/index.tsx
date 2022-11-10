import React from 'react';

interface IconCustomProps {
  iconSource: string;
  className?: string;
  onClick?: () => void;
}

const IconCustom = (props: IconCustomProps) => {
  const { iconSource, className = '', onClick = () => null } = props;
  return <img src={iconSource} className={className} onClick={onClick} />;
};

export default IconCustom;
