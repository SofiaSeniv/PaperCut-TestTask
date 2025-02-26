namespace PaperCut.API.Utils
{
    public static class MatrixConverter
    {
        public static char[,] ToCharMatrix(string[][] source, int n, int m)
        {
            var matrix = new char[n, m];
            
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < m; j++)
                {
                    matrix[i, j] = source[i][j][0];
                }
            }

            return matrix;
        }
    }
}