import { Link } from 'react-router-dom';
import { Algorithm } from '../types';

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

export function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  return (
    <div className="border dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-2">{algorithm.name}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow">
          {algorithm.description}
        </p>
        <Link
          to={`/algorithm/${algorithm.id}`}
          className="bg-rose-500 text-white px-4 py-2 hover:bg-rose-600 transition-colors w-full text-center"
        >
          More details
        </Link>
      </div>
    </div>
  );
}