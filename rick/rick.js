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
    if(resposta.toLowerCase() == respostaCerta){
        alert("Rick caiu no chão!! E agora?")
        segundaFase();
        break;
    }else if(resposta.toLowerCase() == "b" || resposta.toLowerCase() == "c"){
        alert("Resposta incorreta!")
        gameOver();
        break;
    }else{
        alert("Digite novamente")
        resposta =  prompt("Rick se transformou em um picles mas sua filha desapereceu com a seringa que o transformava em humano novamente. O que acontece com rick depois disso?" +"\n" + "A) Um gato aparece e joga Rick no chão" + "\n" + "B) Rick acha outra seringa" + "\n" + "C) Rick apodrece e morre" );
        }
    }
}
function segundaFase(){
    var resposta =  prompt("Rick caiu no chão e saiu rolando pra rua, começou a chover muito e ele foi arrastado pro bueiro caindo dentro do esgoto, o que rick precisa fazer?" +"\n" + "A) Se agarrar em alguma coisa" + "\n" + "B) Desistir, porque ele é um picles e não há nada que possa fazer" + "\n" + "C) Arrancar a cabeça de uma barata e usar o ceu cérebro para se locomover" );
    var respostaCerta = "c";
    while(true){
        if(resposta.toLowerCase() == respostaCerta){
            alert("Rick arranca a cabeça da barata, sobe no seu corpo e usa o seu cérebro para se locomover com as pernas da barata e segue em frente!")
            terceiraFase();
            break;
        }else if(resposta.toLowerCase() == "a" || resposta.toLowerCase() == "b"){
            alert("Resposta incorreta")
            gameOver()
            break;
        }else{
            alert("Digite novamente")
            resposta =  prompt("Rick caiu no chão e saiu rolando pra rua, começou a chover muito e ele foi arrastado pro bueiro caindo dentro do esgoto, o que rick precisa fazer?" +"\n" + "A) Se agarrar em alguma coisa" + "\n" + "B) Desistir, porque ele é um picles e não há nada que possa fazer" + "\n" + "C) Arrancar a cabeça de uma barata e usar o ceu cérebro para se locomover" );
        }
    }
}

function terceiraFase(){
    var resposta = prompt("Rick segue seu caminho usando o corpo da barata e se depara com um rato, o que rick deve fazer agora?" + "\n" + "A) Se desespera e corre" + "\n" + "B) Faz uma armadilha para arrancar a cabeça do rato" + "\n" + "C) Rick é comido pelo rato")
    var respostaCerta = "b";
    while(true){
    if(resposta.toLowerCase() == respostaCerta){
        alert("Rick arranca a cabeça do rato com sua armadilha, usa o cérebro do rato para se tornar mais forte, encaixa as pernas e os braços do rato em si mesmo e mata todos os outros ratos do esgoto sobrevivendo a essa aventura!")
        voceVenceu();
        break;
    }else if(resposta.toLowerCase() == "a" || resposta.toLowerCase() == "c"){
        alert("Resposta incorreta")
        gameOver()
        break;
    }else{
        alert("Digite novamente");
        resposta = prompt("Rick segue seu caminho usando o corpo da barata e se depara com um rato, o que rick deve fazer agora?" + "\n" + "A) Se desespera e corre" + "\n" + "B) Faz uma armadilha para arrancar a cabeça do rato" + "\n" + "C) Rick é comido pelo rato")
        }
    }    
}