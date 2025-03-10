import { Algorithm } from "../types";

export const algorithms: Algorithm[] = [
  {
    id: "binary-search",
    name: "Binary Search",
    description:
      "A search algorithm that finds the position of a target value within a sorted array.",
    category: "search",
    availableLanguages: ["js", "py", "cs", "lua", "cpp"],
  },
  {
    id: "quick-sort",
    name: "Quick Sort",
    description:
      "An efficient, in-place sorting algorithm that uses a divide-and-conquer strategy.",
    category: "sorting",
    availableLanguages: ["js", "py", "cs", "lua", "cpp"],
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    description:
      "Generates the Fibonacci sequence where each number is the sum of the previous two.",
    category: "math",
    availableLanguages: ["js", "py", "cs", "lua", "cpp"],
  },
  {
    id: "dijkstra",
    name: "Dijkstra's Algorithm",
    description:
      "Finds the shortest paths between nodes in a graph with non-negative edge weights.",
    category: "graph",
    availableLanguages: ["js", "py", "cs", "lua", "cpp"],
  },
  {
    id: "merge-sort",
    name: "Merge Sort",
    description:
      "A divide-and-conquer sorting algorithm that divides the array, sorts each part, and merges them back.",
    category: "sorting",
    availableLanguages: ["js", "py", "cs", "lua", "cpp"],
  },
  {
    id: "depth-first-search",
    name: "Depth-First Search",
    description:
      "A graph traversal algorithm that explores as far as possible along each branch before backtracking.",
    category: "graph",
    availableLanguages: ["js", "py", "cs", "lua", "cpp"],
  },
];
