import heapq

def dijkstra(graph, start):
    # Priority queue to store (distance, vertex) tuples
    priority_queue = [(0, start)]
    # Dictionary to store the shortest path to each vertex
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0

    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)

        # Nodes can only be added once to the priority queue
        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            # Only consider this new path if it's better
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances

# Example usage
if __name__ == "__main__":
    graph = {
        'A': {'B': 1, 'C': 4},
        'B': {'A': 1, 'C': 2, 'D': 5},
        'C': {'A': 4, 'B': 2, 'D': 1},
        'D': {'B': 5, 'C': 1}
    }
    start_vertex = 'A'
    distances = dijkstra(graph, start_vertex)
    print(f"Shortest distances from {start_vertex}: {distances}")