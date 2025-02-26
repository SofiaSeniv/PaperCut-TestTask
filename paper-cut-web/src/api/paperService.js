const API_BASE_URL = 'http://localhost:5179/api';

export const countPieces = async (gridState, dimensions) => {
    const response = await fetch(`${API_BASE_URL}/papers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Matrix: gridState,
            n: parseInt(dimensions.n),
            m: parseInt(dimensions.m)
        })
    });
    
    if (!response.ok) {
        throw new Error('Failed to count pieces');
    }
    
    const data = await response.json();
    return data.num;
}; 