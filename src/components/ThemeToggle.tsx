import React from 'react';
import { Icon } from '@iconify/react';

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      return savedTheme as 'light' | 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === 'light' ? (
        <Icon icon="solar:sun-bold-duotone" className="w-5 h-5" />
      ) : (
        <Icon icon="solar:moon-bold-duotone" className="w-5 h-5" />
      )}
    </button>
  );
}