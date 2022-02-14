let numero1, numero2, suma, resta, multi,divi, restoCuenta

function sumar(){
    numero1 = parseFloat(document.getElementById("n1").value)
    numero2 = parseFloat(document.getElementById("n2").value)

    suma = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById("resultado").innerHTML = suma 
}
function restar(){
    
    numero1 = parseFloat(document.getElementById("n1").value)
    numero2 = parseFloat(document.getElementById("n2").value)

    resta = parseFloat(numero1) - parseFloat(numero2)
    document.getElementById("resultado").innerHTML = resta 
}
function multiplicar(){
    numero1 = parseFloat(document.getElementById("n1").value)
    numero2 = parseFloat(document.getElementById("n2").value)

    multi = parseFloat(numero1) * parseFloat(numero2)
    document.getElementById("resultado").innerHTML = multi 
}
function dividir(){   
    numero1 = parseFloat(document.getElementById("n1").value)
    numero2 = parseFloat(document.getElementById("n2").value)

    divi = parseFloat(numero1) / parseFloat(numero2)
    document.getElementById("resultado").innerHTML = divi 
}
function resto(){   
    numero1 = parseFloat(document.getElementById("n1").value)
    numero2 = parseFloat(document.getElementById("n2").value)

    restoCuenta = parseFloat(numero1) % parseFloat(numero2)
    document.getElementById("resultado").innerHTML = restoCuenta 
}
function limpiar(){
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}
