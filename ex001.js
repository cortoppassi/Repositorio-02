function exmedia() {

var n1 = parseFloat(prompt("Digite o primeiro numero:"))
var n2 = parseFloat(prompt("Digite o Seundo numero:"))
var media = (n1+n2) / 2

alert(`A media entre os numeros ${n1} e ${n2} é igual a ${media}`)

if ( media >= 5 ) {
    alert("Parabens, você foi aprovado!")
}else{
    alert("Descupe, voce esta reprovado!")
}
}


function exswitch(n1) {

var n1 = parseInt(prompt("Digite um número de 1 a 3:"))
    switch(n1){
 case 1:
    alert("Boa escolha!");
    break;
 case 2:
    alert("Muito bom!");
 break;
 case 3:
    alert("Caramba!");
 break;
 default:
    alert("Escolha um numero de 1 a 3!")
      }  
}

function abrir() {

   window.location.href = 'EventosDOM.html'

}