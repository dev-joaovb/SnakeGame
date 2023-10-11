// quadrados
let additionalSquares2 = [
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

    // Duas paredes ao centro na horizontal
    { xx: 120, yy: 240, color: 'white' },
    { xx: 150, yy: 240, color: 'white' },
    { xx: 180, yy: 240, color: 'white' },
    { xx: 210, yy: 240, color: 'white' },
    { xx: 240, yy: 240, color: 'white' },
    { xx: 270, yy: 240, color: 'white' },
    { xx: 300, yy: 240, color: 'white' },
    { xx: 330, yy: 240, color: 'white' },
    { xx: 360, yy: 240, color: 'white' },
    { xx: 390, yy: 240, color: 'white' },
    { xx: 420, yy: 240, color: 'white' },
    { xx: 450, yy: 240, color: 'white' },
    
    
    { xx: 270, yy: 330, color: 'white' },
    { xx: 120, yy: 330, color: 'white' },
    { xx: 150, yy: 330, color: 'white' },
    { xx: 180, yy: 330, color: 'white' },
    { xx: 210, yy: 330, color: 'white' },
    { xx: 240, yy: 330, color: 'white' },
    { xx: 270, yy: 330, color: 'white' },
    { xx: 300, yy: 330, color: 'white' },
    { xx: 330, yy: 330, color: 'white' },
    { xx: 360, yy: 330, color: 'white' },
    { xx: 390, yy: 330, color: 'white' },
    { xx: 420, yy: 330, color: 'white' },
    { xx: 450, yy: 330, color: 'white' },



]

console.log('exportado')

export function getAdditionalSquaresF2(){
    return additionalSquares2
}

