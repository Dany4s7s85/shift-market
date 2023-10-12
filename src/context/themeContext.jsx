import { useEffect, useState } from 'react';
import { createContextHook } from 'use-context-hook';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPreferences = window.localStorage.getItem('color-theme');
    if (typeof storedPreferences === 'string') {
      return storedPreferences;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  // If you want to use light theme as the default, return "light" instead
  return 'dark';
};

const context = {};
export const ThemeContext = createContextHook(context);

export function ThemeProvider({ initialTheme, children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // eslint-disable-next-line no-shadow
  const rawSetTheme = theme => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="wrapper">{children}</div>
    </ThemeContext.Provider>
  );
}
