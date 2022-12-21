
function criptografa(){
    
    var output = document.querySelector("#textosaida");
    
    document.getElementById("digitetexto").style.display = "none";
    document.getElementById("resultado").style.display = "inline-block";

    //pega texto do input
    var input = document.querySelector("#texto");
    var mensagem = input.value;
    var novaMensagem = "";

    //transforma em array
    var listaCaractere = mensagem.split("");

    //usa for para percorrer array
    for(var i=0; i<listaCaractere.length; i++){
        //se caractere for igual umas das keys criptografa
        if(listaCaractere[i] == "a"){
            listaCaractere[i] = "ai";
        }
        else if(listaCaractere[i] == "e"){
            listaCaractere[i] = "enter";
        }
        else if(listaCaractere[i] == "i"){
            listaCaractere[i] = "imes";
        }
        else if(listaCaractere[i] == "o"){
            listaCaractere[i] = "ober";
        }
        else if(listaCaractere[i] == "u"){
            listaCaractere[i] = "ufat";
        }
        novaMensagem = novaMensagem + listaCaractere[i];
    }
    //enviar mensagem criptografada para output
    output.value = novaMensagem;
}

function descriptografa(){
    
    var output = document.querySelector("#textosaida");
    
    document.getElementById("digitetexto").style.display = "none";
    document.getElementById("resultado").style.display = "inline-block";

    //pega texto do input
    var input = document.querySelector("#texto");
    var mensagem = input.value;

    //decodifica
    mensagem = mensagem.replaceAll("ai", "a");
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u");
    //enviar mensagem criptografada para output
    output.value = mensagem;
}

function copia(){

    var output = document.querySelector("#textosaida");
    navigator.clipboard.writeText(output.value);
    alert("Texto copiado!");
}