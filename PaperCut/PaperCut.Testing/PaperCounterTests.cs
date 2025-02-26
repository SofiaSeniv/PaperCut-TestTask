namespace PaperCut.Testing
{
    public class PaperCounterTests
    {
        private readonly PaperCounter counter;

        public PaperCounterTests()
        {
            counter = new PaperCounter();
        }


        [Theory]
        [MemberData(nameof(GetGraphTestCases))]
        public void CountPieces_ShouldReturnCorrectNumber(char[,] matrix, int expectedNum)
        {
            var graph = new Graph(matrix);

            var result = counter.CountPieces(graph);

            Assert.Equal(expectedNum, result);

        }

        public static IEnumerable<object[]> GetGraphTestCases()
        {
            yield return new object[]
            {
                new char[,] { }, 0
            };

            yield return new object[]
            {
                new char[,]
                {
                    { '1', '1', '1' },
                    { '1', '1', '1' }
                },
                1 
            };

            yield return new object[]
            {
                new char[,]
                {
                    { '1', '0', '1' },
                    { '0', '1', '0' },
                    { '1', '0', '1' }
                },
                5 
            };

            yield return new object[]
            {
                new char[,]
                {
                    { '0', '0', '0' },
                    { '0', '1', '0' },
                    { '0', '0', '0' }
                },
                1 
            };

            yield return new object[]
            {
                new char[,]
                {
                    { '1', '1', '0', '1' },
                    { '1', '0', '0', '1' },
                    { '0', '1', '1', '1' }
                },
                2
            };

            yield return new object[]
            {
                new char[,]
                {
                    { '1', '1', '1' },
                    { '1', '0', '1' },
                    { '1', '1', '1' }
                },
                1
            };
        }
    }
}