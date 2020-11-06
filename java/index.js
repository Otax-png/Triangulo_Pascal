const m = document.getElementById("main")
const crearTriangulo = filas => {    
    let matriz = new Array(filas)    
    matriz[0] = [1];
    matriz[1] = [1, 1]
    if(filas > 2 ){
        let tamanio = 1
    for(let f = 2; f < filas; f++){        
            matriz[f] = new Array()
            for(let i = 0; i < tamanio; i++){
                let num = matriz[f - 1][i] +matriz[f - 1][i +1]
                matriz[f].push(num)                
            }
            matriz[f].push(1)
            matriz[f].unshift(1)
            tamanio++        
        }    
    }
    return matriz
}


const agregarHtml = filas =>{
    let espacio = document.createElement("div")
    m.appendChild(espacio)
    let matriz = crearTriangulo(filas)
    matriz.forEach(fila => {
        let contenedor = document.createElement("h1") 
        contenedor.innerText= "";
        let t = ""
        fila.forEach(dato =>{            
            t += `| ${dato} `            
            
        })
        t += "|"
        contenedor.innerText = t
        espacio.appendChild(contenedor);
    })
}

function obtenerFilas(){    
    let hijo = m.removeChild(m.lastChild)
    let filas = prompt("INGRESE LAS FILAS QUE DESEA", "3")    
    agregarHtml(filas)        
}

agregarHtml(3);