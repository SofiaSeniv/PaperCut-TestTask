namespace PaperCut
{
    public class PaperCounter : IPaperCounter
    {
        public int CountPieces(Graph graph)
        {
            int pieceNumber = 0;

            for (int i = 0; i < graph.N; i++)
            {
                for (int j = 0; j < graph.M; j++)
                {
                    if (graph.Matrix[i, j] == '1')
                    {
                        pieceNumber++;
                        graph.DFS(i, j);
                    }
                }
            }

            return pieceNumber;
        }
    }
}