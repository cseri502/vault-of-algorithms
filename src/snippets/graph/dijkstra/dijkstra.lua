-- Dijkstra's Algorithm in Lua

-- Function to find the vertex with the minimum distance value
local function minDistance(dist, sptSet, V)
    local min = math.huge
    local min_index = -1

    for v = 1, V do
        if sptSet[v] == false and dist[v] <= min then
            min = dist[v]
            min_index = v
        end
    end

    return min_index
end

-- Function to implement Dijkstra's algorithm
local function dijkstra(graph, src, V)
    local dist = {}
    local sptSet = {}

    -- Initialize all distances as infinite and sptSet[] as false
    for i = 1, V do
        dist[i] = math.huge
        sptSet[i] = false
    end

    -- Distance of source vertex from itself is always 0
    dist[src] = 0

    -- Find shortest path for all vertices
    for count = 1, V - 1 do
        -- Pick the minimum distance vertex from the set of vertices not yet processed
        local u = minDistance(dist, sptSet, V)

        -- Mark the picked vertex as processed
        sptSet[u] = true

        -- Update dist value of the adjacent vertices of the picked vertex
        for v = 1, V do
            if not sptSet[v] and graph[u][v] ~= 0 and dist[u] ~= math.huge and dist[u] + graph[u][v] < dist[v] then
                dist[v] = dist[u] + graph[u][v]
            end
        end
    end

    return dist
end

-- Example usage
local graph = {
    {0, 10, 0, 0, 0, 0},
    {10, 0, 5, 0, 0, 0},
    {0, 5, 0, 20, 1, 0},
    {0, 0, 20, 0, 2, 2},
    {0, 0, 1, 2, 0, 3},
    {0, 0, 0, 2, 3, 0}
}

local V = 6
local src = 1
local distances = dijkstra(graph, src, V)

print("Vertex Distance from Source")
for i = 1, V do
    print(i, distances[i])
end