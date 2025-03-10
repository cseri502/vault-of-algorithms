using System;
using System.Collections.Generic;

class Graph
{
    private int Vertices;
    private List<int>[] adj;

    public Graph(int vertices)
    {
        Vertices = vertices;
        adj = new List<int>[vertices];
        for (int i = 0; i < vertices; i++)
            adj[i] = new List<int>();
    }

    public void AddEdge(int v, int w)
    {
        adj[v].Add(w);
    }

    private void DFSUtil(int v, bool[] visited)
    {
        visited[v] = true;
        Console.Write(v + " ");

        foreach (int neighbor in adj[v])
        {
            if (!visited[neighbor])
                DFSUtil(neighbor, visited);
        }
    }

    public void DFS(int v)
    {
        bool[] visited = new bool[Vertices];
        DFSUtil(v, visited);
    }

    public static void Main(string[] args)
    {
        Graph g = new Graph(4);

        g.AddEdge(0, 1);
        g.AddEdge(0, 2);
        g.AddEdge(1, 2);
        g.AddEdge(2, 0);
        g.AddEdge(2, 3);
        g.AddEdge(3, 3);

        Console.WriteLine("Depth First Traversal starting from vertex 2:");

        g.DFS(2);
    }
}