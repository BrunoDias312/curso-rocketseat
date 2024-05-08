/*
 solicite 2 numeros, faca a soma deles 
 e apresente o resultado final ao usuario.
*/
alert("Iremos somar 2 numberos")
let numberOne = prompt("Digite o primeiro numero: ");
let numbertwo = prompt("Digite o segundo numbero: ");

alert( (parseInt(numberOne) + Number(numbertwo)) / 2 ) // parseInt e Number, passa o numero para Int

alert( "o valor é " + (parseInt(numberOne) + Number(numbertwo)) / 2 )
alert(typeof(numberOne))