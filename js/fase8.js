// quadrados
let additionalSquares8 = [
// xx: horizontal
// yy: vertical

    // Parede L (canto superio esquerdo)
    { xx: 60, yy: 30, color: 'white' },
    { xx: 90, yy: 30, color: 'white' },
    { xx: 120, yy: 30, color: 'white' },

    { xx: 30, yy: 30, color: 'white' },
    { xx: 30, yy: 60, color: 'white' },
    { xx: 30, yy: 90, color: 'white' },
    { xx: 30, yy: 120, color: 'white' },
    
    // parede ao topo
    { xx: 240, yy: 30, color: 'white' },
    { xx: 270, yy: 30, color: 'white' },
    { xx: 300, yy: 30, color: 'white' },
    { xx: 330, yy: 30, color: 'white' },
    { xx: 360, yy: 30, color: 'white' },
    { xx: 390, yy: 30, color: 'white' },
    { xx: 420, yy: 30, color: 'white' },
    { xx: 450, yy: 30, color: 'white' },
    { xx: 480, yy: 30, color: 'white' },

    // parede vertical 1 (cima)
    { xx: 300, yy: 60, color: 'white' },
    { xx: 300, yy: 90, color: 'white' },
    { xx: 300, yy: 120, color: 'white' },
    { xx: 300, yy: 150, color: 'white' },
    { xx: 300, yy: 180, color: 'white' },
    { xx: 300, yy: 210, color: 'white' },
    { xx: 300, yy: 240, color: 'white' },
    
    // parede horizontal 1 (conectada com parede vertical 1)
    { xx: 270, yy: 240, color: 'white' },
    { xx: 240, yy: 240, color: 'white' },
    { xx: 210, yy: 240, color: 'white' },
    { xx: 180, yy: 240, color: 'white' },
    { xx: 150, yy: 240, color: 'white' },
    { xx: 120, yy: 240, color: 'white' },
    { xx: 90, yy: 240, color: 'white' },
    { xx: 60, yy: 240, color: 'white' },
    { xx: 30, yy: 240, color: 'white' },

    // parede horizontal 2 (isolada a direita)
    { xx: 390, yy: 240, color: 'white' },
    { xx: 420, yy: 240, color: 'white' },
    { xx: 450, yy: 240, color: 'white' },
    { xx: 480, yy: 240, color: 'white' },
    { xx: 510, yy: 240, color: 'white' },
    { xx: 540, yy: 240, color: 'white' },

    /// parede horizontal 3 (central)
    { xx: 540, yy: 330, color: 'white' },
    { xx: 510, yy: 330, color: 'white' },
    { xx: 480, yy: 330, color: 'white' },
    { xx: 450, yy: 330, color: 'white' },
    { xx: 420, yy: 330, color: 'white' },
    { xx: 390, yy: 330, color: 'white' },
    { xx: 360, yy: 330, color: 'white' },
    { xx: 330, yy: 330, color: 'white' },
    { xx: 300, yy: 330, color: 'white' },
    { xx: 270, yy: 330, color: 'white' },
    { xx: 240, yy: 330, color: 'white' },
    { xx: 210, yy: 330, color: 'white' },
    { xx: 180, yy: 330, color: 'white' },
    { xx: 150, yy: 330, color: 'white' },
    { xx: 120, yy: 330, color: 'white' },
    { xx: 90, yy: 330, color: 'white' },
    { xx: 60, yy: 330, color: 'white' },
    { xx: 30, yy: 330, color: 'white' },

    // parede horizontal 4 (conectada a parede vertical 2 abaixo)
    { xx: 540, yy: 420, color: 'white' },
    { xx: 510, yy: 420, color: 'white' },
    { xx: 480, yy: 420, color: 'white' },
    { xx: 450, yy: 420, color: 'white' },
    { xx: 420, yy: 420, color: 'white' },
    { xx: 390, yy: 420, color: 'white' },
    { xx: 360, yy: 420, color: 'white' },
    { xx: 330, yy: 420, color: 'white' },
    { xx: 300, yy: 420, color: 'white' },
    { xx: 270, yy: 420, color: 'white' },
    { xx: 240, yy: 420, color: 'white' },
    { xx: 210, yy: 420, color: 'white' },
    { xx: 180, yy: 420, color: 'white' },
    { xx: 150, yy: 420, color: 'white' },
    { xx: 120, yy: 420, color: 'white' },
    { xx: 90, yy: 420, color: 'white' },
    { xx: 60, yy: 420, color: 'white' },
    { xx: 30, yy: 420, color: 'white' },

    // parede vertical 2 baixo (conectada a parede horizontal 4)
    { xx: 300, yy: 450, color: 'white' },
    { xx: 300, yy: 480, color: 'white' },
    { xx: 300, yy: 510, color: 'white' },
    { xx: 300, yy: 540, color: 'white' },
    
    
    ]
    
    console.log('exportado')
    
    export function getAdditionalSquaresF8(){
        return additionalSquares8
    }
    
    