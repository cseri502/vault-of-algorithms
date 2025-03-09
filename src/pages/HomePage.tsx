import React from 'react';
import { Icon } from '@iconify/react';
import { SearchBar } from '../components/SearchBar';
import { AlgorithmCard } from '../components/AlgorithmCard';
import { algorithms } from '../data/algorithms';

export function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredAlgorithms = algorithms.filter(algo =>
    algo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the Vault of Algorithms</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Discover, learn, and implement various algorithms across multiple programming languages. 
          Our curated collection helps you understand the fundamentals of computer science.
        </p>
        <div className="flex items-center justify-center gap-4 text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:code-braces" className="w-5 h-5" />
            <span>Multiple Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:book-open-variant" className="w-5 h-5" />
            <span>Detailed Explanations</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="mdi:content-copy" className="w-5 h-5" />
            <span>Copy & Use</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAlgorithms.map(algorithm => (
            <AlgorithmCard
              key={algorithm.id}
              algorithm={algorithm}
            />
          ))}
        </div>
      </div>
    </div>
  );
}