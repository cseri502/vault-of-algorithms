import { Icon } from '@iconify/react';

export function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 bg-white dark:bg-zinc-900 py-6">
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <span>Made with a ⌨️</span>
        <span>•</span>
        <a
          href="https://github.com/yourusername/vault-of-algorithms"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-rose-500 transition-colors"
        >
          <Icon icon="mdi:github" className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}