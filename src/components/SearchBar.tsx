import { Icon } from '@iconify/react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Icon icon="icon-park-twotone:search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search algorithms..."
        className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 border-none focus:outline-none focus:ring-2 focus:ring-rose-500"
      />
    </div>
  );
}