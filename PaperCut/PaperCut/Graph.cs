namespace PaperCut
{
    public class Graph
    {
        public char[,] Matrix { get; private set; }
        public int N { get; private set; }
        public int M { get; private set; }

        public Graph(char[,] matrix)
        {
            Matrix = matrix;
            N = matrix.GetLength(0);
            M = matrix.GetLength(1);
        }

        public void DFS(int i, int j)
        {
            if (i < 0 || i >= N || j < 0 || j >= M || Matrix[i, j] != '1')
            {
                return;
            }

            Matrix[i, j] = '0';
            DFS(i, j + 1);
            DFS(i, j - 1);
            DFS(i + 1, j);
            DFS(i - 1, j);
        }
    }
}