// quadrados
let additionalSquares = [
    // xx: horizontal
    // yy: vertical

    // Canto superior Esquerdo
    { xx: 60, yy: 30, color: 'white' },
    { xx: 90, yy: 30, color: 'white' },
    
    { xx: 30, yy: 30, color: 'white' },
    { xx: 30, yy: 60, color: 'white' },
    { xx: 30, yy: 90, color: 'white' },

    // canto inferior Esquerdo
    { xx: 60, yy: 540, color: 'white' },
    { xx: 90, yy: 540, color: 'white' },
    
    { xx: 30, yy: 480, color: 'white' },
    { xx: 30, yy: 510, color: 'white' },
    { xx: 30, yy: 540, color: 'white' },

    // canto superior direito
    { xx: 540, yy: 30, color: 'white' },
    { xx: 540, yy: 60, color: 'white' },
    { xx: 540, yy: 90, color: 'white' },
    
    { xx: 510, yy: 30, color: 'white' },
    { xx: 480, yy: 30, color: 'white' },

    // canto inferior direito
    { xx: 540, yy: 480, color: 'white' },
    { xx: 510, yy: 540, color: 'white' },
    { xx: 480, yy: 540, color: 'white' },
    
    { xx: 540, yy: 540, color: 'white' },
    { xx: 540, yy: 510, color: 'white' },






]

console.log('exportado')

export function getAdditionalSquaresF1(){
    return additionalSquares
}

