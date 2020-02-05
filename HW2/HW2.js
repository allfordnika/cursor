var numberN = prompt('Введите число N');
console.log(numberN);

var verificationN = parseInt(numberN);
console.log(verificationN);

while ( numberN !== Number.isInteger(numberN) || isNaN(verificationN) ){

    numberN = prompt('Введите число N');
    console.log(numberN);

    verificationN = parseInt(numberN);
    console.log(verificationN);

}

var numberM = prompt('Введите число M');
console.log(numberM);

var verificationM = parseInt(numberM);
console.log(verificationM);

var integer = Number.isInteger(numberM);

while ( numberM !== Number.isInteger(numberM) || isNaN(verificationM)) {

    numberM = prompt('Введите число M');
    console.log(numberN);

    verificationM = parseInt(numberM);
    console.log(verificationM);

}


let question = confirm("Нужно ли нам пропускать четные числа?");

alert( question ); // true, если нажата OK


var summ = 0;
for (var i = verificationN; i <= numberM; i++) {

    if (question){

        if( (i % 2)!== 0 ){
            summ = summ + i;
        }

    }
    else  {
        summ = summ + i;
    }

}
console.log(summ);