-- Depth First Search (DFS) implementation in Lua

-- Graph represented as an adjacency list
local graph = {
    A = {"B", "C"},
    B = {"D", "E"},
    C = {"F"},
    D = {},
    E = {"F"},
    F = {}
}

-- DFS function
local function DFS(graph, startNode, visited)
    if not visited then
        visited = {}
    end

    -- Mark the current node as visited
    visited[startNode] = true
    print(startNode)

    -- Recur for all the vertices adjacent to this vertex
    for _, neighbor in ipairs(graph[startNode]) do
        if not visited[neighbor] then
            DFS(graph, neighbor, visited)
        end
    end
end

-- Usage example
local startNode = "A"
print("Depth First Search starting from node " .. startNode .. ":")
DFS(graph, startNode)

-- Explanation:
-- The graph is represented as an adjacency list where each key is a node and the value is a list of adjacent nodes.
-- The DFS function takes the graph, a starting node, and an optional visited table to keep track of visited nodes.
-- It marks the current node as visited, prints it, and then recursively visits all unvisited adjacent nodes.