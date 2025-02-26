public record GraphDto
{
    public required string[][] Matrix { get; init; }
    public int N { get; init; }
    public int M { get; init; }
}