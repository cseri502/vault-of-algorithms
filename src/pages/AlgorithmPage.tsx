import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@iconify/react";
import { algorithms } from "../data/algorithms";
import { languages } from "../data/languages";

interface AlgorithmPageProps {
  isDarkTheme: boolean;
}

export function AlgorithmPage({ isDarkTheme }: AlgorithmPageProps) {
  const { id } = useParams();
  const [isCopied, setIsCopied] = useState(false);
  const algorithm = algorithms.find((algo) => algo.id === id);
  const [selectedLang, setSelectedLang] = useState(() => {
    const firstAvailableLang = languages.find(
      lang => algorithm?.implementations[lang.id] !== undefined
    );

    return firstAvailableLang ? firstAvailableLang.id : languages[0].id;
  });

  if (!algorithm) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Algorithm not found</h2>
        <Link to="/" className="text-rose-500 hover:text-rose-600">
          Return to home
        </Link>
      </div>
    );
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      algorithm.implementations[selectedLang]
    );
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icon icon="mdi:arrow-left" className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-bold">{algorithm.name}</h1>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 text-lg">
        {algorithm.description}
      </p>

      <div className="flex gap-2">
        {languages
          .filter((lang) => algorithm.implementations[lang.id] !== undefined)
          .map((lang) => (
            <button
              key={lang.id}
              onClick={() => setSelectedLang(lang.id)}
              className={`p-2 transition-colors ${
                selectedLang === lang.id
                  ? "text-rose-500"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <Icon
                icon={lang.icon}
                className={`w-8 h-8 ${
                  selectedLang === lang.id ? "text-rose-500" : ""
                }`}
              />
            </button>
          ))}
      </div>

      <div className="relative">
        <div className="absolute right-4 top-4">
          <button
            onClick={handleCopy}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Icon
              icon={isCopied ? "mdi:check" : "mdi:content-copy"}
              className="w-5 h-5"
            />
          </button>
        </div>
        <div
          className={`overflow-x-auto ${
            isDarkTheme ? "bg-[#282c34]" : "bg-[#fafafa]"
          } p-4`}
        >
          <SyntaxHighlighter
            language={selectedLang}
            style={isDarkTheme ? oneDark : oneLight}
            customStyle={{
              margin: 0,
              padding: 0,
              background: isDarkTheme ? "#282c34" : "#fafafa",
            }}
          >
            {algorithm.implementations[selectedLang]}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
