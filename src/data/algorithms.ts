import { Algorithm } from '../types';

export const algorithms: Algorithm[] = [
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'A search algorithm that finds the position of a target value within a sorted array.',
    category: 'Search',
    implementations: {
      javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1`,
      csharp: `public static int BinarySearch(int[] arr, int target)
{
    int left = 0;
    int right = arr.Length - 1;
    
    while (left <= right)
    {
        int mid = (left + right) / 2;
        
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}`,
      lua: `function binarySearch(arr, target)
    local left = 1  -- Lua arrays start at index 1
    local right = #arr
    
    while left <= right do
        local mid = math.floor((left + right) / 2)
        
        if arr[mid] == target then
            return mid
        elseif arr[mid] < target then
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    return -1
end`,
      cpp: `int binarySearch(std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}`
    }
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    description: 'An efficient, in-place sorting algorithm that uses a divide-and-conquer strategy.',
    category: 'Sorting',
    implementations: {
      javascript: `function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
      python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
        
    pivot = arr[-1]
    left = []
    right = []
    
    for x in arr[:-1]:
        if x < pivot:
            left.append(x)
        else:
            right.append(x)
            
    return quick_sort(left) + [pivot] + quick_sort(right)`,
      csharp: `public static List<T> QuickSort<T>(List<T> arr) where T : IComparable
{
    if (arr.Count <= 1) return arr;
    
    var pivot = arr[arr.Count - 1];
    var left = new List<T>();
    var right = new List<T>();
    
    for (int i = 0; i < arr.Count - 1; i++)
    {
        if (arr[i].CompareTo(pivot) < 0)
            left.Add(arr[i]);
        else
            right.Add(arr[i]);
    }
    
    var result = QuickSort(left);
    result.Add(pivot);
    result.AddRange(QuickSort(right));
    return result;
}`,
      lua: `function quickSort(arr)
    if #arr <= 1 then
        return arr
    end
    
    local pivot = arr[#arr]
    local left = {}
    local right = {}
    
    for i = 1, #arr - 1 do
        if arr[i] < pivot then
            table.insert(left, arr[i])
        else
            table.insert(right, arr[i])
        end
    end
    
    local result = {}
    local sortedLeft = quickSort(left)
    local sortedRight = quickSort(right)
    
    for i = 1, #sortedLeft do
        table.insert(result, sortedLeft[i])
    end
    
    table.insert(result, pivot)
    
    for i = 1, #sortedRight do
        table.insert(result, sortedRight[i])
    end
    
    return result
end`,
      cpp: `template <typename T>
std::vector<T> quickSort(const std::vector<T>& arr) {
    if (arr.size() <= 1)
        return arr;
        
    T pivot = arr.back();
    std::vector<T> left;
    std::vector<T> right;
    
    for (size_t i = 0; i < arr.size() - 1; i++) {
        if (arr[i] < pivot)
            left.push_back(arr[i]);
        else
            right.push_back(arr[i]);
    }
    
    auto sortedLeft = quickSort(left);
    auto sortedRight = quickSort(right);
    
    std::vector<T> result;
    result.insert(result.end(), sortedLeft.begin(), sortedLeft.end());
    result.push_back(pivot);
    result.insert(result.end(), sortedRight.begin(), sortedRight.end());
    
    return result;
}`
    }
  },
  {
    id: 'fibonacci',
    name: 'Fibonacci',
    description: 'Generates the Fibonacci sequence where each number is the sum of the previous two.',
    category: 'Mathematics',
    implementations: {
      javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}`,
      python: `def fibonacci(n):
    if n <= 1:
        return n
        
    prev, curr = 0, 1
    
    for i in range(2, n + 1):
        next = prev + curr
        prev = curr
        curr = next
        
    return curr`,
      csharp: `public static int Fibonacci(int n)
{
    if (n <= 1) return n;
    
    int prev = 0;
    int curr = 1;
    
    for (int i = 2; i <= n; i++)
    {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}`,
      lua: `function fibonacci(n)
    if n <= 1 then
        return n
    end
    
    local prev = 0
    local curr = 1
    
    for i = 2, n do
        local next = prev + curr
        prev = curr
        curr = next
    end
    
    return curr
end`,
      cpp: `int fibonacci(int n) {
    if (n <= 1)
        return n;
        
    int prev = 0;
    int curr = 1;
    
    for (int i = 2; i <= n; i++) {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}`
    }
  },
  {
    id: 'dijkstra',
    name: 'Dijkstra\'s Algorithm',
    description: 'Finds the shortest paths between nodes in a graph with non-negative edge weights.',
    category: 'Graph',
    implementations: {
      javascript: `function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = new PriorityQueue();
  
  // Initialize distances
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      queue.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }
  
  while (!queue.isEmpty()) {
    const current = queue.dequeue().element;
    
    if (visited[current]) continue;
    visited[current] = true;
    
    // For each neighbor of current
    for (let neighbor in graph[current]) {
      if (visited[neighbor]) continue;
      
      const distance = distances[current] + graph[current][neighbor];
      
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
        queue.enqueue(neighbor, distance);
      }
    }
  }
  
  return { distances, previous };
  
  // Simple priority queue implementation
  function PriorityQueue() {
    this.elements = [];
    
    this.enqueue = function(element, priority) {
      this.elements.push({ element, priority });
      this.elements.sort((a, b) => a.priority - b.priority);
    };
    
    this.dequeue = function() {
      return this.elements.shift();
    };
    
    this.isEmpty = function() {
      return this.elements.length === 0;
    };
  }
}`,
      python: `import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    previous = {vertex: None for vertex in graph}
    
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        
        # If we've already found a shorter path, skip
        if current_distance > distances[current_vertex]:
            continue
            
        # Check neighbors
        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight
            
            # If we found a shorter path, update
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = current_vertex
                heapq.heappush(priority_queue, (distance, neighbor))
                
    return distances, previous`,
      csharp: `public static Dictionary<string, int> Dijkstra(
    Dictionary<string, Dictionary<string, int>> graph, 
    string start)
{
    var distances = new Dictionary<string, int>();
    var previous = new Dictionary<string, string>();
    var nodes = new List<string>();
    
    // Initialize
    foreach (var vertex in graph.Keys)
    {
        if (vertex.Equals(start))
            distances[vertex] = 0;
        else
            distances[vertex] = int.MaxValue;
            
        previous[vertex] = null;
        nodes.Add(vertex);
    }
    
    while (nodes.Count > 0)
    {
        // Find vertex with minimum distance
        string smallest = null;
        foreach (var vertex in nodes)
        {
            if (smallest == null || distances[vertex] < distances[smallest])
                smallest = vertex;
        }
        
        // Remove from unvisited
        nodes.Remove(smallest);
        
        // Break if we've processed all reachable nodes
        if (distances[smallest] == int.MaxValue)
            break;
            
        // Check each neighbor
        foreach (var neighbor in graph[smallest].Keys)
        {
            var alt = distances[smallest] + graph[smallest][neighbor];
            if (alt < distances[neighbor])
            {
                distances[neighbor] = alt;
                previous[neighbor] = smallest;
            }
        }
    }
    
    return distances;
}`,
      lua: `function dijkstra(graph, start)
    local distances = {}
    local previous = {}
    local nodes = {}
    
    -- Initialize
    for vertex, _ in pairs(graph) do
        if vertex == start then
            distances[vertex] = 0
        else
            distances[vertex] = math.huge
        end
        previous[vertex] = nil
        table.insert(nodes, vertex)
    end
    
    while #nodes > 0 do
        -- Find minimum distance vertex
        local smallest = nil
        local smallestIndex = nil
        for i, vertex in ipairs(nodes) do
            if smallest == nil or distances[vertex] < distances[smallest] then
                smallest = vertex
                smallestIndex = i
            end
        end
        
        -- Remove from unvisited
        table.remove(nodes, smallestIndex)
        
        -- Break if we've processed all reachable nodes
        if distances[smallest] == math.huge then
            break
        end
        
        -- Check each neighbor
        for neighbor, weight in pairs(graph[smallest]) do
            local alt = distances[smallest] + weight
            if alt < distances[neighbor] then
                distances[neighbor] = alt
                previous[neighbor] = smallest
            end
        end
    end
    
    return distances, previous
end`,
      cpp: `#include <queue>
#include <map>
#include <limits>
#include <string>

std::map<std::string, int> dijkstra(
    const std::map<std::string, std::map<std::string, int>>& graph, 
    const std::string& start)
{
    std::map<std::string, int> distances;
    std::map<std::string, std::string> previous;
    
    // Initialize distances
    for (const auto& pair : graph) {
        const std::string& vertex = pair.first;
        if (vertex == start) {
            distances[vertex] = 0;
        } else {
            distances[vertex] = std::numeric_limits<int>::max();
        }
        previous[vertex] = "";
    }
    
    // Priority queue for vertices to visit
    // pair: (distance, vertex)
    typedef std::pair<int, std::string> pq_item;
    std::priority_queue<pq_item, std::vector<pq_item>, std::greater<pq_item>> pq;
    pq.push(std::make_pair(0, start));
    
    while (!pq.empty()) {
        std::string current = pq.top().second;
        int currentDist = pq.top().first;
        pq.pop();
        
        // If we already found a better path, skip
        if (currentDist > distances[current]) continue;
        
        // Check all neighbors
        for (const auto& neighbor : graph.at(current)) {
            int distance = currentDist + neighbor.second;
            
            // If we found a better path
            if (distance < distances[neighbor.first]) {
                distances[neighbor.first] = distance;
                previous[neighbor.first] = current;
                pq.push(std::make_pair(distance, neighbor.first));
            }
        }
    }
    
    return distances;
}`
    }
  },
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    description: 'A divide-and-conquer sorting algorithm that divides the array, sorts each part, and merges them back.',
    category: 'Sorting',
    implementations: {
      javascript: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
        
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)
    
def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
            
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
      csharp: `public static List<T> MergeSort<T>(List<T> arr) where T : IComparable
{
    if (arr.Count <= 1)
        return arr;
        
    int mid = arr.Count / 2;
    var left = MergeSort(arr.GetRange(0, mid));
    var right = MergeSort(arr.GetRange(mid, arr.Count - mid));
    
    return Merge(left, right);
}

private static List<T> Merge<T>(List<T> left, List<T> right) where T : IComparable
{
    var result = new List<T>();
    int leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < left.Count && rightIndex < right.Count)
    {
        if (left[leftIndex].CompareTo(right[rightIndex]) < 0)
        {
            result.Add(left[leftIndex]);
            leftIndex++;
        }
        else
        {
            result.Add(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements
    while (leftIndex < left.Count)
    {
        result.Add(left[leftIndex]);
        leftIndex++;
    }
    
    while (rightIndex < right.Count)
    {
        result.Add(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}`,
      lua: `function mergeSort(arr)
    if #arr <= 1 then
        return arr
    end
    
    local mid = math.floor(#arr / 2)
    local left = {}
    local right = {}
    
    for i = 1, mid do
        left[i] = arr[i]
    end
    
    for i = mid + 1, #arr do
        right[i - mid] = arr[i]
    end
    
    return merge(mergeSort(left), mergeSort(right))
end

function merge(left, right)
    local result = {}
    local i, j = 1, 1
    
    while i <= #left and j <= #right do
        if left[i] < right[j] then
            table.insert(result, left[i])
            i = i + 1
        else
            table.insert(result, right[j])
            j = j + 1
        end
    end
    
    -- Add remaining elements
    while i <= #left do
        table.insert(result, left[i])
        i = i + 1
    end
    
    while j <= #right do
        table.insert(result, right[j])
        j = j + 1
    end
    
    return result
end`,
      cpp: `template <typename T>
std::vector<T> merge(const std::vector<T>& left, const std::vector<T>& right) {
    std::vector<T> result;
    size_t i = 0, j = 0;
    
    // Compare elements and merge
    while (i < left.size() && j < right.size()) {
        if (left[i] < right[j]) {
            result.push_back(left[i]);
            i++;
        } else {
            result.push_back(right[j]);
            j++;
        }
    }
    
    // Add remaining elements
    while (i < left.size()) {
        result.push_back(left[i]);
        i++;
    }
    
    while (j < right.size()) {
        result.push_back(right[j]);
        j++;
    }
    
    return result;
}

template <typename T>
std::vector<T> mergeSort(std::vector<T> arr) {
    if (arr.size() <= 1) {
        return arr;
    }
    
    size_t mid = arr.size() / 2;
    
    // Split array and sort recursively
    std::vector<T> left(arr.begin(), arr.begin() + mid);
    std::vector<T> right(arr.begin() + mid, arr.end());
    
    left = mergeSort(left);
    right = mergeSort(right);
    
    return merge(left, right);
}`
    }
  },
  {
    id: 'depth-first-search',
    name: 'Depth-First Search',
    description: 'A graph traversal algorithm that explores as far as possible along each branch before backtracking.',
    category: 'Graph',
    implementations: {
      javascript: `function dfs(graph, start, visited = {}) {
  // Mark current node as visited
  visited[start] = true;
  console.log(start); // Process current node
  
  // Visit all adjacent vertices
  const neighbors = graph[start] || [];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  }
  
  return visited;
}

// Iterative version with explicit stack
function dfsIterative(graph, start) {
  const visited = {};
  const stack = [start];
  
  while (stack.length > 0) {
    const current = stack.pop();
    
    if (!visited[current]) {
      visited[current] = true;
      console.log(current); // Process current node
      
      // Add neighbors to stack
      const neighbors = graph[current] || [];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited[neighbors[i]]) {
          stack.push(neighbors[i]);
        }
      }
    }
  }
  
  return visited;
}`,
      python: `def dfs_recursive(graph, vertex, visited=None):
    if visited is None:
        visited = set()
        
    # Mark current node as visited
    visited.add(vertex)
    print(vertex)  # Process current node
    
    # Visit all adjacent vertices
    for neighbor in graph.get(vertex, []):
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)
            
    return visited

# Iterative version with explicit stack
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    
    while stack:
        vertex = stack.pop()
        
        if vertex not in visited:
            visited.add(vertex)
            print(vertex)  # Process current node
            
            # Add neighbors to stack (in reverse order to match recursive version)
            neighbors = graph.get(vertex, [])
            for neighbor in reversed(neighbors):
                if neighbor not in visited:
                    stack.append(neighbor)
                    
    return visited`,
      csharp: `public static HashSet<T> DFS<T>(Dictionary<T, List<T>> graph, T start)
{
    var visited = new HashSet<T>();
    DFSUtil(graph, start, visited);
    return visited;
}

private static void DFSUtil<T>(Dictionary<T, List<T>> graph, T vertex, HashSet<T> visited)
{
    // Mark current node as visited
    visited.Add(vertex);
    Console.WriteLine(vertex); // Process current node
    
    // Visit all adjacent vertices
    if (graph.ContainsKey(vertex))
    {
        foreach (var neighbor in graph[vertex])
        {
            if (!visited.Contains(neighbor))
            {
                DFSUtil(graph, neighbor, visited);
            }
        }
    }
}

// Iterative version with explicit stack
public static HashSet<T> DFSIterative<T>(Dictionary<T, List<T>> graph, T start)
{
    var visited = new HashSet<T>();
    var stack = new Stack<T>();
    stack.Push(start);
    
    while (stack.Count > 0)
    {
        var vertex = stack.Pop();
        
        if (!visited.Contains(vertex))
        {
            visited.Add(vertex);
            Console.WriteLine(vertex); // Process current node
            
            // Add neighbors to stack
            if (graph.ContainsKey(vertex))
            {
                foreach (var neighbor in graph[vertex])
                {
                    if (!visited.Contains(neighbor))
                    {
                        stack.Push(neighbor);
                    }
                }
            }
        }
    }
    
    return visited;
}`,
      lua: `function dfs_recursive(graph, vertex, visited)
    visited = visited or {}
    
    -- Mark current node as visited
    visited[vertex] = true
    print(vertex) -- Process current node
    
    -- Visit all adjacent vertices
    for _, neighbor in ipairs(graph[vertex] or {}) do
        if not visited[neighbor] then
            dfs_recursive(graph, neighbor, visited)
        end
    end
    
    return visited
end

-- Iterative version with explicit stack
function dfs_iterative(graph, start)
    local visited = {}
    local stack = {start}
    
    while #stack > 0 do
        local vertex = table.remove(stack) -- pop from stack
        
        if not visited[vertex] then
            visited[vertex] = true
            print(vertex) -- Process current node
            
            -- Add neighbors to stack (in reverse order to match recursive version)
            local neighbors = graph[vertex] or {}
            for i = #neighbors, 1, -1 do
                local neighbor = neighbors[i]
                if not visited[neighbor] then
                    table.insert(stack, neighbor)
                end
            end
        end
    end
    
    return visited
end`,
      cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <unordered_map>
#include <unordered_set>

// Recursive DFS
template <typename T>
void dfsUtil(const std::unordered_map<T, std::vector<T>>& graph,
             T vertex,
             std::unordered_set<T>& visited) {
    // Mark the current node as visited
    visited.insert(vertex);
    std::cout << vertex << " "; // Process current node
    
    // Visit all adjacent vertices
    if (graph.find(vertex) != graph.end()) {
        for (const T& neighbor : graph.at(vertex)) {
            if (visited.find(neighbor) == visited.end()) {
                dfsUtil(graph, neighbor, visited);
            }
        }
    }
}

template <typename T>
std::unordered_set<T> dfs(const std::unordered_map<T, std::vector<T>>& graph, T start) {
    std::unordered_set<T> visited;
    dfsUtil(graph, start, visited);
    return visited;
}

// Iterative DFS
template <typename T>
std::unordered_set<T> dfsIterative(const std::unordered_map<T, std::vector<T>>& graph, T start) {
    std::unordered_set<T> visited;
    std::stack<T> stack;
    stack.push(start);
    
    while (!stack.empty()) {
        T vertex = stack.top();
        stack.pop();
        
        if (visited.find(vertex) == visited.end()) {
            visited.insert(vertex);
            std::cout << vertex << " "; // Process current node
            
            // Add neighbors to stack
            if (graph.find(vertex) != graph.end()) {
                const auto& neighbors = graph.at(vertex);
                for (auto it = neighbors.rbegin(); it != neighbors.rend(); ++it) {
                    if (visited.find(*it) == visited.end()) {
                        stack.push(*it);
                    }
                }
            }
        }
    }
    
    return visited;
}`
    }
  }
];