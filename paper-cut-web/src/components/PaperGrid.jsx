/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PaperGrid.css';

const PaperGrid = ({ n, m, onGridChange }) => {
    const [grid, setGrid] = useState(
        Array(n).fill().map(() => Array(m).fill(false))
    );

    const toggleCell = (row, col) => {
        const newGrid = grid.map((r, i) => 
            i === row ? r.map((cell, j) => 
                j === col ? !cell : cell
            ) : r
        );
        setGrid(newGrid);
        const gridState = newGrid.map(row => 
            row.map(cell => cell ? "0" : "1")
        );
        onGridChange(gridState);
    };

    return (
        <div className="piece-counter">
            <div className="grid">
                {grid.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((cell, j) => (
                            <button
                                key={`${i}-${j}`}
                                className={`cell ${cell ? 'selected' : ''}`}
                                onClick={() => toggleCell(i, j)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaperGrid;