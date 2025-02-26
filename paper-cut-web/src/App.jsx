import { useState } from 'react';
import PaperGrid from './components/PaperGrid';
import DimensionInput from './components/DimensionInput';
import { countPieces } from './api/paperService';
import './App.css';

function App() {
    const [dimensions, setDimensions] = useState({ n: 0, m: 0 });
    const [showGrid, setShowGrid] = useState(false);
    const [pieceCount, setPieceCount] = useState(null);
    const [gridState, setGridState] = useState(null);
    const [gridKey, setGridKey] = useState(0);

    const handleGenerateGrid = () => {
        setShowGrid(true);
        setPieceCount(null);
        setGridState(null);
        setGridKey(prev => prev + 1);
    };

    const handleCountPieces = async () => {
        if (!gridState) return;
        
        try {
            const count = await countPieces(gridState, dimensions);
            setPieceCount(count);
        } catch (error) {
            console.error('Error counting pieces:', error);
            setPieceCount(null);
        }
    };

    return (
        <div className="app">
            <h1>Piece Counter</h1>
            <div className="dimensions">
                <DimensionInput
                    label="Rows"
                    value={dimensions.n}
                    onChange={(value) => setDimensions(prev => ({
                        ...prev,
                        n: value
                    }))}
                />
                <DimensionInput
                    label="Columns"
                    value={dimensions.m}
                    onChange={(value) => setDimensions(prev => ({
                        ...prev,
                        m: value
                    }))}
                />
            </div>
            <button 
                className="generate-button"
                onClick={handleGenerateGrid}
                disabled={dimensions.n <= 0 || dimensions.m <= 0}
            >
                Generate Grid
            </button>

            {showGrid && (
                <>
                    <button 
                        className="count-button"
                        onClick={handleCountPieces}
                    >
                        Count Pieces
                    </button>
                    
                    {pieceCount !== null && (
                        <div className="result">
                            <h2>Number of Pieces: {pieceCount}</h2>
                        </div>
                    )}

                    <PaperGrid
                        key={gridKey}
                        n={dimensions.n}
                        m={dimensions.m}
                        onGridChange={setGridState}
                    />
                </>
            )}
        </div>
    );
}

export default App;