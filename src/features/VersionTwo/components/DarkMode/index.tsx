import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { BsFillMoonFill } from 'react-icons/bs';

const DarkMode = () => {
  const [themeMode, setThemeMode] = useState('light');
  const clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme: React.SetStateAction<string> | null = null;

  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e: any) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
    }
    setThemeMode(theme);
  };

  return (
    <button
      className={theme === 'dark' ? clickedClass : ''}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >
      {themeMode === 'light' || theme === 'light' ? <FiSun /> : <BsFillMoonFill />}
    </button>
  );
};

export default DarkMode;
