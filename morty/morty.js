function gameOver(){
    location.assign("./gameover.html");
}

function voceVenceu(){
    location.assign("./vocevenceu.html")
}

function primeiraFase(){
var resposta =  prompt("Morty precisa ir a um baile da sua escola mas não se sente atraente o suficiente para atrair a garota dos seus sonhos. O que Morty deve fazer?" +"\n" + "A) Desistir de ir ao baile pois se acha muito feio" + "\n" + "B) Pedir pro seu avô Rick fazer uma poção mágica para qualquer um se apaixonar por ele" + "\n" + "C) Ir com a roupa que o seu pai usou no baile na adolescência" );
var respostaCerta = "b";
    while(true){
    if(resposta.toLowerCase() == respostaCerta){
        alert("Rick fez a poção para Morty e o entregou, mas esqueceu de avisar que tinha um efeito colateral")
        segundaFase();
        break;
    }else if(resposta.toLowerCase() == "a" || resposta.toLowerCase() == "c"){
        alert("Resposta incorreta!")
        gameOver();
        break;
    }else{
        alert("Digite novamente")
        resposta =  prompt("Morty precisa ir a um baile da sua escola mas não se sente atraente o suficiente para atrair a garota dos seus sonhos. O que Morty deve fazer?" +"\n" + "A) Desistir de ir ao baile pois se acha muito feio" + "\n" + "B) Pedir pro seu avô Rick fazer uma poção mágica para qualquer um se apaixonar por ele" + "\n" + "C) Ir com a roupa que o seu pai usou no baile na adolescência");
        }
    }
}
function segundaFase(){
    var resposta =  prompt("Morty chega ao baile e esbarra na garota que ele é apaixonado, deixando cair um pouco da poção no braço dela, mas o efeito colateral começa a agir. Qual é o efeito colaretal da poção?" +"\n" + "A) Se a pessoa que encostar na poção estiver gripada, contamina outras pessoas com o efeito da poção deixando elas apaixonadas pelo Morty" + "\n" + "B) Se a poção for usada em alguém que odeia o Morty, essa pessoa tentará matar ele " + "\n" + "C) Se Morty usar o poção nele mesmo, ele se apaixonará pela primeira pessoa que ele vir");
    var respostaCerta = "a";
    while(true){
        if(resposta.toLowerCase() == respostaCerta){
            alert("A poção funcionou, mas a menina que Morty usou a poção estava gripada e deixou todos do baile apaixonados por ele! E agora?")
            terceiraFase();
            break;
        }else if(resposta.toLowerCase() == "b" || resposta.toLowerCase() == "c"){
            alert("Resposta incorreta")
            gameOver()
            break;
        }else{
            alert("Digite novamente")
            resposta =  prompt("Morty chega ao baile e esbarra na garota que ele é apaixonado, deixando cair um pouco da poção no braço dela, mas o efeito colateral começa a agir. Qual é o efeito colaretal da poção?" +"\n" + "A) Se a pessoa que encostar na poção estiver gripada, contamina outras pessoas com o efeito da poção deixando elas apaixonadas pelo Morty" + "\n" + "B) Se a poção for usada em alguém que odeia o Morty, essa pessoa tentará matar ele " + "\n" + "C) Se Morty usar o poção nele mesmo, ele se apaixonará pela primeira pessoa que ele vir");
        }
    }
}

function terceiraFase(){
    var resposta = prompt("Todos começam a brigar entre si e a atacar Morty pois o amam loucamente por conta da poção, o baile vira um caos e seu avô aparece para resgata-lo o levando para sua espaçonave, o que Morty faz?" +"\n" + "A) Morty sobrevoa a multidão de pessoas apaixonadas por ele na espaçonave do seu avô e joga um antídoto nelas com hormônio de louva-deus" + "\n" + "B) Morty foge com o seu avô na espaçonave para bem longe" + "\n" + "C) Morty prefere ficar na multidão e ser amado por todos")
    var respostaCerta = "a";
    while(true){
    if(resposta.toLowerCase() == respostaCerta){
        alert("Morty joga o antídoto na multidão e todos se transformam em um louva-deus, mas pelo menos deixaram de amar ele loucamente")
        voceVenceu();
        break;
    }else if(resposta.toLowerCase() == "b" || resposta.toLowerCase() == "c"){
        alert("Resposta incorreta")
        gameOver()
        break;
    }else{
        alert("Digite novamente");
        resposta = prompt("Todos começam a brigar entre si e a atacar Morty pois o amam loucamente por conta da poção, o baile vira um caos e seu avô aparece para resgata-lo o levando para sua espaçonave, o que Morty faz?" +"\n" + "A) Morty sobrevoa a multidão de pessoas apaixonadas por ele na espaçonave do seu avô e joga um antídoto nelas com hormônio de louva-deus" + "\n" + "B) Morty foge com o seu avô na espaçonave para bem longe" + "\n" + "C) Morty prefere ficar na multidão e ser amado por todos")
        }
    }    
}