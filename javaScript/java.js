let monto = parseFloat(prompt("Ingrese monto: "))

let cuotass = parseInt(prompt("Ingrese cantidad de cuotas: "))

function cuotas(){
    precioDeCuotas = monto/cuotass

    return precioDeCuotas
}

let final = cuotas(cuotass)

alert("El precio de $" + monto + " en " + cuotass + " cuotas, es de: $" + final)
