/* 
const, let, var szavakkal hozunk létre változókat
az egyenlőség jel bal oldalán szerepel a változó neve
jobb oldalán az ahhez tartozó érték

a primitívek a következők:
szöveg(string)
szám
boolean(true-false)
undefined
null

*/

let aString = "this is a string"; //mindig idézőjelbe rakjuk a stringet, backtick-el(``) több soros stringet tudunk létrehozni, a másik két fajta idézőjellel('' és "") csak egy sorosat

let aNumber = 1; //nem szabad idézőjelbe rakni a számot

let aBoolean = false; //nem szabad idézőjelbe rakni a boolean-t

let anUndefined = undefined; //nem szabad idézőjelbe rakni az undefined-t

let aNull = null; //nem szabad idézőjelbe rakni a null-t

let notANumber = NaN; //nem szabad idézőjelbe rakni a NaN-t

console.log(typeof aString); //ugyanúgy kell leírni a változó nevét, mint ahogy létrehoztuk

console.log(typeof anUndefined); //típusa undefined

console.log(typeof aNull); //típusa object

console.log(typeof NaN); //típusa: szám

console.log(aFunction1());

function aFunction1() {
  //ez a fgv belseje

  //a fgv mindenképpen return-öl ha lefuttatjuk, ha nem adunk meg return-t akkor undefined-ot ad vissza
  return "this is a function"; //a return utáni sorok a function-ben nem futnak le, mindig egy értékkel tér vissza
}

const aFunction2 = function () {
  //ez is egy fgv, majdnem ugyanúgy viselkedik mintha a fgv-nek neve lenne
  return "this is an other function";
};

console.log(aFunction2()); //minden változóba mentett dolgunkhoz csak akkor férünk hozzá ha utána hívjuk meg

//------BLOCK SCOPE-------

{
  let x = 2; //block scope: {}-en belüli variable-k nem érhetőek el {}-en kívülről, ha let-et vagy const-ot használunk
}

{
  var x = 2; // ha var-al hozunk létre egy variable-t a {}-en belül, akkor azt kívülről is el lehet érni
}

//------FUNCTION SCOPE-------

function myFunction() {
  var carName = "Volvo";
  let carName2 = "BMW";
  const carName3 = "Mazda";
  //a function-ön belül létrehozott variable-k nem érhetőek el a function-ön kívülről
}

//------GLOBAL SCOPE-------

let carName = "Volvo"; //a function-ön kívül létrehozott variable elérhető a teljes kódban, akár a function-ön belül is

function myFunction() {}

if (true) {
  //ide jön az ha teljesül a feltétel
} else {
  //ide jön ha nem teljesül a feltétel
}

function example(something) {} //a paraméter nevét használjuk a fgv-en belül, de ami értéket kívülről küldünk az bármi lehet

console.log("0" == 0); //nem valós összehasonlítást tesz, a típusát nem vizsgálja meg csak az értékét

console.log("0" === 0); //minden összehasonlításnál a 3 === kell használni

//ha tömböt látok akkor for ciklussal lehet végignézni az összes elemet

const arr = [34, 15, 88, 2]; //ez egy tömb []

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

for (const item of arr) {
  console.log(item);
}
