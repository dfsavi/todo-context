import React from 'react';
import { ThemeContext } from '../context/themeContext';
import { ThemeContextType, Theme } from '../@types/theme';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType;
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };
  return (
    <div className='Theme-wrapper' data-theme={theme}>
      <select name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};

export default ThemeWrapper;
