import { Icon } from '@iconify/react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
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