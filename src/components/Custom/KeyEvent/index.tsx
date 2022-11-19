import React, { ReactNode } from 'react';

interface KeyEventProps {
  children?: ReactNode;
  condition?: boolean;
  handleEvent: () => void;
}

const KeyEvent = (props: KeyEventProps) => {
  const { children, condition, handleEvent } = props;

  const handleKeypress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && condition) {
      handleEvent();
    }
  };

  return <div onKeyPress={handleKeypress}>{children}</div>;
};

export default KeyEvent;
