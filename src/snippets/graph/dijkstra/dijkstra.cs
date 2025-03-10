using System;
using System.Collections.Generic;

public class Graph
{
    private readonly int _vertices;
    private readonly List<Tuple<int, int>>[] _adjacencyList;

    public Graph(int vertices)
    {
        _vertices = vertices;
        _adjacencyList = new List<Tuple<int, int>>[vertices];

        for (int i = 0; i < vertices; i++)
        {
            _adjacencyList[i] = new List<Tuple<int, int>>();
        }
    }

    public void AddEdge(int u, int v, int weight)
    {
        _adjacencyList[u].Add(new Tuple<int, int>(v, weight));
        _adjacencyList[v].Add(new Tuple<int, int>(u, weight)); // For undirected graph
    }

    public int[] Dijkstra(int source)
    {
        int[] distances = new int[_vertices];
        bool[] shortestPathTreeSet = new bool[_vertices];

        for (int i = 0; i < _vertices; i++)
        {
            distances[i] = int.MaxValue;
            shortestPathTreeSet[i] = false;
        }

        distances[source] = 0;

        for (int count = 0; count < _vertices - 1; count++)
        {
            int u = MinDistance(distances, shortestPathTreeSet);
            shortestPathTreeSet[u] = true;

            for (int v = 0; v < _vertices; v++)
            {
                if (!shortestPathTreeSet[v] && _adjacencyList[u].Exists(x => x.Item1 == v) &&
                    distances[u] != int.MaxValue && distances[u] + _adjacencyList[u].Find(x => x.Item1 == v).Item2 < distances[v])
                {
                    distances[v] = distances[u] + _adjacencyList[u].Find(x => x.Item1 == v).Item2;
                }
            }
        }

        return distances;
    }

    private int MinDistance(int[] distances, bool[] shortestPathTreeSet)
    {
        int min = int.MaxValue, minIndex = -1;

        for (int v = 0; v < _vertices; v++)
        {
            if (shortestPathTreeSet[v] == false && distances[v] <= min)
            {
                min = distances[v];
                minIndex = v;
            }
        }

        return minIndex;
    }
}

public class Program
{
    public static void Main()
    {
        int vertices = 9;
        Graph graph = new Graph(vertices);

        graph.AddEdge(0, 1, 4);
        graph.AddEdge(0, 7, 8);
        graph.AddEdge(1, 2, 8);
        graph.AddEdge(1, 7, 11);
        graph.AddEdge(2, 3, 7);
        graph.AddEdge(2, 8, 2);
        graph.AddEdge(2, 5, 4);
        graph.AddEdge(3, 4, 9);
        graph.AddEdge(3, 5, 14);
        graph.AddEdge(4, 5, 10);
        graph.AddEdge(5, 6, 2);
        graph.AddEdge(6, 7, 1);
        graph.AddEdge(6, 8, 6);
        graph.AddEdge(7, 8, 7);

        int source = 0;
        int[] distances = graph.Dijkstra(source);

        Console.WriteLine("Vertex\tDistance from Source");
        for (int i = 0; i < vertices; i++)
        {
            Console.WriteLine($"{i}\t{distances[i]}");
        }
    }
}