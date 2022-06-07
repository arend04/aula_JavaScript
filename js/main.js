
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.dio.me/");
    //window.location.href = "https://www.dio.me/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
   elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
   elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
   return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
console.log("Hoje é" + get)
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva" , cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var lista = ["maçã", "pera", "laranja" ];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
*/


//var nome = "Aline Arend";
//var idade = 39;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade +idade2);
//console.log(nome);
//console.log(idade * idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão" , "Brasil"));