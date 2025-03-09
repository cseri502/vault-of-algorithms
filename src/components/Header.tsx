import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="border-b dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/machine-learning.png"
            alt="Machine Learning image"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold">Vault of Algorithms</span>
        </Link>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
