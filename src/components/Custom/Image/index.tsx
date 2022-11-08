import React from 'react';

interface ImageCustomProps {
  src: string;
  className?: string;
  alt?: string;
  onClick?: () => void;
}

const ImageCustom = (props: ImageCustomProps) => {
  const { src, className = '', alt = '', onClick = () => null } = props;
  return <img src={src} className={className} alt={alt} onClick={onClick} />;
};

export default ImageCustom;
