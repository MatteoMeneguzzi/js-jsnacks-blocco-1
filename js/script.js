// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// var richieste = 5;

// var sum = 0;

// for (var i = 0; i < 5; i++) {
// 	var number = parseInt(prompt("Insert number " + i + " di " + richieste));
// 	console.log(number);
// 	sum += number;
// }
// console.log(sum);

// counter = 0;
// while (counter < 5) {
// 	var number = parseInt(
// 		prompt("Insert number " + counter + " di " + richieste)
// 	);
// 	counter++;
// 	console.log(number);
// 	sum += number;
// }
// console.log(sum);

// Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// var number = parseInt(prompt("Insert number"));

// if (number % 2 === 0) {
// 	console.log(number);
// } else {
// 	console.log(++number);
// }

// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi
// Gatsby vuole generare una falsa lista di 3 invitati.

// var names = ["filippo", "lorenzo", "matteo"];

// var lastnames = ["rossi", "mercalli", "bianchi"];

// var fullList = [];

// for (var i = 0; i < 3; i++) {
// 	var randomName = Math.floor(Math.random() * names.length);
// 	// console.log(names[randomName]);
// 	var randomLastName = Math.floor(Math.random() * lastnames.length);
// 	// console.log(lastnames[randomLastName]);
// 	var fullName = names[randomName] + " " + lastnames[randomLastName];
// 	// console.log(fullName);
// 	fullList.push(fullName);
// 	console.log(fullList);
// }

// while (fullList.length < 3) {
// 	var randomName = Math.floor(Math.random() * names.length);
// 	// console.log(names[randomName]);
// 	var randomLastName = Math.floor(Math.random() * lastnames.length);
// 	// console.log(lastnames[randomLastName]);
// 	var fullName = names[randomName] + " " + lastnames[randomLastName];
// 	// console.log(fullName);

// 	fullList.push(fullName);
// }
// console.log(fullList);

// Snack 4
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// var numList = [4, 7, 13, 12, 18, 20];

// sum = 0;

// for (var i = 0; i < numList.length; i++) {
// 	console.log(numList[i]);
// 	console.log("Position: " + i);
// 	if (i % 2 !== 0) {
// 		sum += numList[i];
// 	}
// }
// console.log(sum);

// Snack 5 - Bonus
// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var numbers = [4, 7, 13, 12, 18, 20];

var numList = [4, 2];

for (var i = numList.length; i < numbers.length; i++) {
	randomNum = Math.floor(Math.random() * 1000 + 1);
	console.log(randomNum);
	numList.push(randomNum);
}

console.log(numList);
