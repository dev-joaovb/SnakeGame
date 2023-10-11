// quadrados
let additionalSquares9 = [
// xx: horizontal
// yy: vertical

    // Metade para cima
    { xx: 60, yy: 30, color: 'white' },
    { xx: 90, yy: 30, color: 'white' },
    { xx: 120, yy: 30, color: 'white' },
    { xx: 150, yy: 30, color: 'white' },
    { xx: 180, yy: 30, color: 'white' },
    { xx: 210, yy: 30, color: 'white' },
    { xx: 240, yy: 30, color: 'white' },
    { xx: 270, yy: 30, color: 'white' },
    { xx: 300, yy: 30, color: 'white' },
    { xx: 330, yy: 30, color: 'white' },
    { xx: 360, yy: 30, color: 'white' },
    { xx: 390, yy: 30, color: 'white' },
    { xx: 420, yy: 30, color: 'white' },
    { xx: 450, yy: 30, color: 'white' },
    { xx: 540, yy: 30, color: 'white' },
    { xx: 540, yy: 60, color: 'white' },
    { xx: 540, yy: 90, color: 'white' },
    { xx: 540, yy: 120, color: 'white' },
    { xx: 540, yy: 150, color: 'white' },
    { xx: 540, yy: 180, color: 'white' },
    { xx: 540, yy: 210, color: 'white' },
    { xx: 540, yy: 240, color: 'white' },

    
    { xx: 30, yy: 30, color: 'white' },
    { xx: 30, yy: 60, color: 'white' },
    { xx: 30, yy: 90, color: 'white' },
    { xx: 30, yy: 120, color: 'white' },
    { xx: 30, yy: 150, color: 'white' },
    { xx: 30, yy: 180, color: 'white' },
    { xx: 30, yy: 210, color: 'white' },
    { xx: 30, yy: 240, color: 'white' },
    { xx: 510, yy: 30, color: 'white' },
    { xx: 480, yy: 30, color: 'white' },

    // metade para baixo
    { xx: 60, yy: 540, color: 'white' },
    { xx: 90, yy: 540, color: 'white' },
    { xx: 120, yy: 540, color: 'white' },
    { xx: 150, yy: 540, color: 'white' },
    { xx: 180, yy: 540, color: 'white' },
    { xx: 210, yy: 540, color: 'white' },
    { xx: 240, yy: 540, color: 'white' },
    { xx: 270, yy: 540, color: 'white' },
    { xx: 300, yy: 540, color: 'white' },
    { xx: 330, yy: 540, color: 'white' },
    { xx: 360, yy: 540, color: 'white' },
    { xx: 390, yy: 540, color: 'white' },
    { xx: 420, yy: 540, color: 'white' },
    { xx: 450, yy: 540, color: 'white' },
    

    { xx: 30, yy: 360, color: 'white' },
    { xx: 30, yy: 390, color: 'white' },
    { xx: 30, yy: 420, color: 'white' },
    { xx: 30, yy: 450, color: 'white' },    
    { xx: 30, yy: 480, color: 'white' },
    { xx: 30, yy: 510, color: 'white' },
    { xx: 30, yy: 540, color: 'white' },

    // canto superior direito
    
    
    

    // canto inferior direito
    { xx: 540, yy: 360, color: 'white' },
    { xx: 540, yy: 390, color: 'white' },
    { xx: 540, yy: 420, color: 'white' },
    { xx: 540, yy: 450, color: 'white' },
    { xx: 540, yy: 480, color: 'white' },
    { xx: 510, yy: 540, color: 'white' },
    { xx: 480, yy: 540, color: 'white' },
    
    { xx: 540, yy: 540, color: 'white' },
    { xx: 540, yy: 510, color: 'white' },

    
    

    // colunas
    // primeira
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
    
    // segunda
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

    //colunas verticais (cima)
    //primeira
    { xx: 180, yy: 90, color: 'white' },
    { xx: 180, yy: 120, color: 'white' },
    { xx: 180, yy: 150, color: 'white' },
    { xx: 180, yy: 180, color: 'white' },

    //segunda
    { xx: 390, yy: 90, color: 'white' },
    { xx: 390, yy: 120, color: 'white' },
    { xx: 390, yy: 150, color: 'white' },
    { xx: 390, yy: 180, color: 'white' },

    // quadrado central
    { xx: 270, yy: 120, color: 'white' },
    { xx: 300, yy: 120, color: 'white' },
    { xx: 270, yy: 150, color: 'white' },
    { xx: 300, yy: 150, color: 'white' },

    
    //colunas verticais (baixo)
    //primeira
    { xx: 180, yy: 420, color: 'white' },
    { xx: 180, yy: 450, color: 'white' },
    { xx: 180, yy: 480, color: 'white' },

    //segunda
    { xx: 390, yy: 420, color: 'white' },
    { xx: 390, yy: 450, color: 'white' },
    { xx: 390, yy: 480, color: 'white' },


    // quadrado na parte inferior esquerda
    { xx: 120, yy: 450, color: 'white' },

    // quadros central (abaixo e entre colunas)
    { xx: 270, yy: 450, color: 'white' },
    { xx: 300, yy: 450, color: 'white' },

    
    
    // quadrado na parte inferior direita
    { xx: 450, yy: 450, color: 'white' },
        
        
        ]
        
        console.log('exportado')
        
        export function getAdditionalSquaresF9(){
            return additionalSquares9
        }
        
        