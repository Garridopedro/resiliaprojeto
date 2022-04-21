function gameOver(){
    location.assign("./gameover.html");
}

function voceVenceu(){
    location.assign("./vocevenceu.html")
}

function primeiraFase(){
var resposta =  prompt("Rick se transformou em um picles mas sua filha desapereceu com a seringa que o transformava em humano novamente. O que acontece com rick depois disso?" +"\n" + "A) Um gato aparece e joga Rick no chão" + "\n" + "B) Rick acha outra seringa" + "\n" + "C) Rick apodrece e morre" );
var respostaCerta = "a";
    while(true){
    if(resposta == respostaCerta){
        alert("Rick caiu no chão!! E agora?")
        segundaFase();
        break;
    }else if(resposta == "b" || resposta == "c"){
        alert("Resposta incorreta!")
        gameOver();
        break;
    }else{
        alert("Digite novamente. (Apenas letras minúsculas)")
        resposta =  prompt("Rick se transformou em um picles mas sua filha desapereceu com a seringa que o transformava em humano novamente. O que acontece com rick depois disso?" +"\n" + "A) Um gato aparece e joga Rick no chão" + "\n" + "B) Rick acha outra seringa" + "\n" + "C) Rick apodrece e morre" );
        }
    }
}
function segundaFase(){
    var resposta =  prompt("");
    var respostaCerta = "";
    while(true){
        if(resposta == respostaCerta){
            alert("")
            terceiraFase();
            break;
        }else if(resposta == "" || resposta == ""){
            alert("Resposta incorreta")
            gameOver()
            break;
        }else{
            alert("Digite novamente. (Apenas letras minúsculas)")
            resposta =  prompt("" );
        }
    }
}

function terceiraFase(){
    var resposta = prompt("")
    var respostaCerta = "";
    while(true){
    if(resposta == respostaCerta){
        alert("")
        voceVenceu();
        break;
    }else if(resposta == "" || resposta == ""){
        alert("Resposta incorreta")
        gameOver()
        break;
    }else{
        alert("Digite novamente. (Apenas letras minúsculas)");
        resposta = prompt("")
        }
    }    
}