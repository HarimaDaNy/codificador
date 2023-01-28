const resultadofinal = document.getElementById("resultado");
const textoinicial = document.getElementById("texto");

function boton_encriptar(){
        const codigo = encriptar(textoinicial.value)
        resultadofinal.value = codigo;
        resultadofinal.style.backgroundImage = "none";
        textoinicial.value = "";
        if(codigo !== ""){
            resultadofinal.style.backgroundImage = "none";
            }
}

function boton_desencriptar(){
    const codigo = desencriptar(textoinicial.value);
    resultadofinal.value = codigo;
    textoinicial.value = "";
    if(codigo !== ""){
    resultadofinal.style.backgroundImage = "none";
    }
}

function encriptar(){
    var cadena = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var cadena = cadena.toLowerCase();
    var tamanio = cadena.length;
    var char = cadena.split("");
    var newcadena = "";

    for (var i = 0; i <= tamanio-1;i++) {
        if (char[i] == "a"){
            newcadena = newcadena + "ai";
                } else if (char[i] == "e"){
                    newcadena = newcadena + "enter";
                } else if (char[i] == "i"){
                    newcadena = newcadena + "imes";
                } else if (char[i] == "o"){
                    newcadena = newcadena + "ober";
                } else if (char[i] == "u"){
                    newcadena = newcadena + "ufat";
                } else {
                    newcadena = newcadena + char[i];
                }
    }

    return newcadena;
}


function desencriptar(){
    var cadena = document.getElementById("texto").value;

    resultado = cadena.replace(/ai/g,'a');
    resultado1 = resultado.replace(/enter/g,'e');
    resultado2 = resultado1.replace(/imes/g,'i');
    resultado3 = resultado2.replace(/ober/g,'o');
    resultado4 = resultado3.replace(/ufat/g,'u');

    return resultado4;
}

function copiar(){
    resultadofinal.select();
    navigator.clipboard.writeText(resultadofinal.value)
    resultadofinal.value = "";
    alert("Copiado!!")
}