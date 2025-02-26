using Microsoft.AspNetCore.Mvc;
using PaperCut.API.Utils;

namespace PaperCut.API.Controllers
{
    [Route("api/papers")]
    [ApiController]
    public class PaperController : ControllerBase
    {
        private readonly IPaperCounter _paperCounter;

        public PaperController(IPaperCounter paperCounter)
        {
            _paperCounter = paperCounter;
        }

        [HttpPost]
        public IActionResult CountPieces([FromBody] GraphDto graphDto)
        {
            var matrix = MatrixConverter.ToCharMatrix(graphDto.Matrix, graphDto.N, graphDto.M);

            var graph = new Graph(matrix);

            int pieces = _paperCounter.CountPieces(graph);
            return Ok(new { num = pieces });
        }
    }
}