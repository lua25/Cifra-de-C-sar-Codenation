

function decifrar(frase, chave){
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz' //define string/array alfabeto para guardar índice de cada letra
    var novaFrase = '' //string resposta
    for(let letra of frase){ //percorre a frase a ser decifrada
        let posicaoLetra = alfabeto.indexOf(letra) //guarda indice da letra que está na string alfabeto
        if(posicaoLetra != -1){ //verifica se o caractere é letra ou não
            if(posicaoLetra - chave < 0){ //se o decremento no alfabeto passa por A -> Z
                novaFrase = novaFrase + alfabeto[26 + posicaoLetra - chave]
            } else {
                novaFrase = novaFrase + alfabeto[posicaoLetra - chave]
            }
        } else { 
            novaFrase = novaFrase + letra
        }
    }
    return novaFrase
}

function cifrar(frase, chave){
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    var novaFrase = ''
    for(let letra of frase){
        let posicaoLetra = alfabeto.indexOf(letra)
        if(posicaoLetra != -1){
            if(posicaoLetra + chave > 25){
                novaFrase = novaFrase + alfabeto[posicaoLetra + chave - 26]
            } else {
                novaFrase = novaFrase + alfabeto[posicaoLetra + chave]
            }
        } else {
            novaFrase = novaFrase + letra
        }
    }
    return novaFrase
}

//console.log(decifrar("g muuj vxumxgsskx ruuqy huzn cgey hkluxk ixuyyotm g utk-cge yzxkkz. atqtuct", 6))

//console.log(decifrar("d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr", 3))
//console.log(cifrar("a ligeira raposa marrom saltou sobre o cachorro cansado", 3))
//console.log("d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr")
function getJson(){
var requestURL = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=3bba4edf2a0751c3cfbe1be1e09a140c42d4766b';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var jsonString = request.response;
  //console.log(jsonText)
 }

}


var answerObj = require("./answer.json", "utf8");

answerObj.decifrado = decifrar(answerObj.cifrado, answerObj.numero_casas)
sha1 = require('js-sha1');
answerObj.resumo_criptografico = sha1(answerObj.decifrado)


console.log(answerObj)


