import React from "react";
import { useParams, Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@iconify/react";
import { algorithms } from "../data/algorithms";
import { languages } from "../data/languages";

export function AlgorithmPage() {
  const { id } = useParams();
  const algorithm = algorithms.find((algo) => algo.id === id);
  const [selectedLang, setSelectedLang] = React.useState(languages[0].id);
  const [isCopied, setIsCopied] = React.useState(false);

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
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedLang(lang.id)}
            className={`p-2 transition-colors ${
              selectedLang === lang.id
                ? "bg-rose-500"
                : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            <Icon
              icon={lang.icon}
              className={`w-6 h-6 ${
                selectedLang === lang.id ? "text-white" : ""
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
        <div className="overflow-x-auto bg-[#282c34] p-4">
          <SyntaxHighlighter
            language={selectedLang}
            style={{
              ...oneDark,
              'pre[class*="language-"]': {
                ...oneDark['pre[class*="language-"]'],
                background: "#282c34",
              },
              'code[class*="language-"]': {
                ...oneDark['code[class*="language-"]'],
                background: "#282c34",
              },
            }}
            customStyle={{
              margin: 0,
              padding: 0,
              background: "#282c34",
            }}
          >
            {algorithm.implementations[selectedLang]}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
