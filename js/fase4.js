// quadrados
let additionalSquares4 = [
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
    
    
    { xx: 270, yy: 360, color: 'white' },
    { xx: 120, yy: 360, color: 'white' },
    { xx: 150, yy: 360, color: 'white' },
    { xx: 180, yy: 360, color: 'white' },
    { xx: 210, yy: 360, color: 'white' },
    { xx: 240, yy: 360, color: 'white' },
    { xx: 270, yy: 360, color: 'white' },
    { xx: 300, yy: 360, color: 'white' },
    { xx: 330, yy: 360, color: 'white' },
    { xx: 360, yy: 360, color: 'white' },
    { xx: 390, yy: 360, color: 'white' },
    { xx: 420, yy: 360, color: 'white' },
    { xx: 450, yy: 360, color: 'white' },

    { xx: 0, yy: 180, color: 'white' },
    { xx: 60, yy: 180, color: 'white' },
    { xx: 90, yy: 180, color: 'white' },
    { xx: 180, yy: 180, color: 'white' },
    { xx: 240, yy: 180, color: 'white' },
    { xx: 270, yy: 180, color: 'white' },
    { xx: 330, yy: 180, color: 'white' },
    { xx: 390, yy: 180, color: 'white' },
    { xx: 420, yy: 180, color: 'white' },
    { xx: 510, yy: 180, color: 'white' },
    { xx: 570, yy: 180, color: 'white' },
    
    
    { xx: 0, yy: 420, color: 'white' },
    { xx: 60, yy: 420, color: 'white' },
    { xx: 120, yy: 420, color: 'white' },
    { xx: 150, yy: 420, color: 'white' },
    { xx: 210, yy: 420, color: 'white' },
    { xx: 270, yy: 420, color: 'white' },
    { xx: 330, yy: 420, color: 'white' },
    { xx: 390, yy: 420, color: 'white' },
    { xx: 450, yy: 420, color: 'white' },
    { xx: 480, yy: 420, color: 'white' },
    { xx: 510, yy: 420, color: 'white' },
    { xx: 570, yy: 420, color: 'white' },
    { xx: 270, yy: 420, color: 'white' },

    // quadrados a mais
    
    // quadrado na parte superior esquerda
    { xx: 90, yy: 90, color: 'white' },
    { xx: 150, yy: 90, color: 'white' },
    { xx: 210, yy: 90, color: 'white' },
    { xx: 270, yy: 90, color: 'white' },
    { xx: 330, yy: 90, color: 'white' },
    { xx: 360, yy: 90, color: 'white' },
    { xx: 420, yy: 90, color: 'white' },

    // quadrado na parte inferior esquerda
    { xx: 90, yy: 480, color: 'white' },

    // quadrado na parte superior direita
    { xx: 480, yy: 90, color: 'white' },
    
    // quadrado na parte inferior direita
    { xx: 480, yy: 480, color: 'white' },
    { xx: 390, yy: 480, color: 'white' },
    { xx: 300, yy: 480, color: 'white' },
    { xx: 210, yy: 480, color: 'white' },
    { xx: 180, yy: 480, color: 'white' },
    // quadrado entre paredes

    { xx: 0, yy: 300, color: 'white' },
    { xx: 60, yy: 300, color: 'white' },
    { xx: 120, yy: 300, color: 'white' },
    { xx: 180, yy: 300, color: 'white' },
    { xx: 240, yy: 300, color: 'white' },
    { xx: 300, yy: 300, color: 'white' },
    { xx: 360, yy: 300, color: 'white' },
    { xx: 420, yy: 300, color: 'white' },
    { xx: 480, yy: 300, color: 'white' },
    { xx: 540, yy: 300, color: 'white' },
]

console.log('exportado')

export function getAdditionalSquaresF4(){
    return additionalSquares4
}

