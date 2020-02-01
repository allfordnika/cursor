var numberN = prompt('Введите число N');
console.log(numberN);

var verificationN = parseInt(numberN);
console.log(verificationN);

while ( isNaN(verificationN)) {

    numberN = prompt('Введите число N');
    console.log(numberN);

    verificationN = parseInt(numberN);
    console.log(verificationN);

}

var numberM = prompt('Введите число M');
console.log(numberM);

var verificationM = parseInt(numberM);
console.log(verificationM);

while ( isNaN(verificationM)) {

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

        if( (i % 2)===0 ){}


        else {
            summ = summ + i;

        }
    }
    else  {
        summ = summ + i;
    }

}
console.log(summ);