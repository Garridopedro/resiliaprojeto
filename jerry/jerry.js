function gameOver(){
    location.assign("./gameover.html");
}

function voceVenceu(){
    location.assign("./vocevenceu.html")
}

function primeiraFase(){
var resposta =  prompt("Jerry está ajudando seu filho Morty no trabalho para sua feira de ciências sobre o sistema solar e acabam discutindo se Plutão é ou não é um planeta. Morty diz pra ele que Plutão deixou de ser um planeta. O que Jerry acha disso?" +"\n" + "A) Jerry continua acreditando que Plutão é um planeta pois aprendeu na escola quando era criança" + "\n" + "B) Jerry aceita que Plutão não é mais um planeta após Morty te mostrar no google" + "\n" + "C) Jerry se estressa e deixa de ajudar Morty no projeto da feira de ciências" );
var respostaCerta = "a";
    while(true){
    if(resposta.toLowerCase() == respostaCerta){
        alert("Jerry aprendeu na escola que Plutão era um planeta e não discorda disso por nada, afinal como um planeta deixa de ser um planeta?")
        segundaFase();
        break;
    }else if(resposta.toLowerCase() == "b" || resposta.toLowerCase() == "c"){
        alert("Resposta incorreta!")
        gameOver();
        break;
    }else{
        alert("Digite novamente")
        resposta =  prompt("Jerry está ajudando seu filho Morty no trabalho para sua feira de ciências sobre o sistema solar e acabam discutindo se Plutão é ou não é um planeta. Morty diz pra ele que Plutão deixou de ser um planeta. O que Jerry acha disso?" +"\n" + "A) Jerry  continua acreditando que Plutão é um planeta pois aprendeu na escola quando era criança" + "\n" + "B) Jerry aceita que Plutão não é mais um planeta após Morty te mostrar no google" + "\n" + "C) Jerry se estressa e deixa de ajudar Morty no projeto da feira de ciências");
        }
    }
}
function segundaFase(){
    var resposta =  prompt("Jerry continua ajudando Morty no projeto da feira de ciências e começam a ser abduzidos por uma espaçonave. Chegando no local eles notam que foram para Plutão e são recebidos por alienígenas de lá, os Plutonianos. O rei dos plutonianos apresenta Jerry para todos e pede para que Jerry mande um recado para eles. O que Jerry deve falar? " +"\n" + "A) Plutão não é um planeta" + "\n" + "B) Plutão é um planeta" + "\n" + "C) Por favor eu só quero ir embora pra casa");
    var respostaCerta = "b";
    while(true){
        if(resposta.toLowerCase() == respostaCerta){
            alert("Jerry diz que Plutão é um planeta e é ovacionado pelo público sendo considerado um ídolo entre eles")
            terceiraFase();
            break;
        }else if(resposta.toLowerCase() == "a" || resposta.toLowerCase() == "c"){
            alert("Resposta incorreta")
            gameOver()
            break;
        }else{
            alert("Digite novamente")
            resposta =  prompt("Jerry continua ajudando Morty no projeto da feira de ciências e começam a ser abduzidos por uma espaçonave. Chegando no local eles notam que foram para Plutão e são recebidos por alienígenas de lá, os Plutonianos. O rei dos plutonianos apresenta Jerry para todos e pede para que Jerry mande um recado para eles. O que Jerry deve falar? " +"\n" + "A) Plutão não é um planeta" + "\n" + "B) Plutão é um planeta" + "\n" + "C) Por favor eu só quero ir embora pra casa");
        }
    }
}

function terceiraFase(){
    var resposta = prompt("Jerry chega a ser convidado para os maiores canais de televisão de Plutão para falar que Plutão é um planeta, só que enquanto isso, um cientista aborda Morty para lhe mostrar que Plutão realmente não é mais um planeta por conta da escavações para retirar o plutônio que gera energia mas acaba encolhendo o que um dia foi um planeta. Morty conta isso a Jerry e diz para ele abrir o jogo e falar para todos os Plutonianos que Plutão não é mais um planeta. O que Jerry deve fazer?" +"\n" + "A) Jerry insiste e continua falando para todos que Plutão é um planeta e sempre vai ser" + "\n" + "B) Jerry fica com pena por todos os Plutonianos estarem sendo enganados e fala para todos que Plutão não é um planeta" + "\n" + "C) Jerry vai atrás do cientista para mandar prende-lo")
    var respostaCerta = "b";
    while(true){
    if(resposta.toLowerCase() == respostaCerta){
        alert("Após Jerry falar que Plutão não é um planeta, a multidão vaia ele, joga tomate podre e o expulsa do planeta o despejando na terra novamente voltando a ajudar Morty no projeto de ciências e aceitando que Plutão não é mais um planeta")
        voceVenceu()
        break;
    }else if(resposta.toLowerCase() == "a" || resposta.toLowerCase() == "c"){
        alert("Resposta incorreta")
        gameOver()
        break;
    }else{
        alert("Digite novamente");
        resposta = prompt("Jerry chega a ser convidado para os maiores canais de televisão de Plutão para falar que Plutão é um planeta, só que enquanto isso, um cientista aborda Morty para lhe mostrar que Plutão realmente não é mais um planeta por conta da escavações para retirar o plutônio que gera energia mas acaba encolhendo o que um dia foi um planeta. Morty conta isso a Jerry e diz para ele abrir o jogo e falar para todos os Plutonianos que Plutão não é mais um planeta. O que Jerry deve fazer?" +"\n" + "A) Jerry insiste e continua falando para todos que Plutão é um planeta e sempre vai ser" + "\n" + "B) Jerry fica com pena por todos os Plutonianos estarem sendo enganados e fala para todos que Plutão não é um planeta" + "\n" + "C) Jerry vai atrás do cientista para mandar prende-lo")
        }
    }    
}