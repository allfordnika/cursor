let carrot = 15.678;
let avocado = 123.965;
let tomato = 90.2345;

Math.max(carrot, avocado, tomato);
console.log(Math.max(carrot, avocado, tomato));

Math.min(carrot,avocado,tomato);
console.log(Math.min(carrot,avocado,tomato));

let wholeC = Math.floor (carrot);
let wholeA = Math.floor (avocado );
let wholeT = Math.floor (tomato );


let vegetables = (carrot+avocado+tomato);
console.log(vegetables);

let wholeVeg = (wholeC + wholeA +wholeT);

Math.trunc  (wholeVeg );
console.log(Math.trunc (wholeVeg ));

console.log((vegetables/100).toFixed(0) * 100)


Boolean(228 % 2)
console.log(Boolean(228 % 2))

let change = (500 - vegetables);
console.log(change);

let averagePrice = vegetables/3
console.log(vegetables/3);
averagePrice.toFixed(2)
console.log(averagePrice.toFixed(2));

let discount = Math.random() * 100
console.log(discount);

let payment = vegetables - (vegetables * discount)/100
console.log(payment.toFixed(2));

payment.toFixed(0)
console.log(payment.toFixed(2))

let costprice = vegetables / 2;
console.log(costprice);

let diff = costprice - ((vegetables * discount)/100);
console.log(diff);

console.log("Максимальная цена:" + Math.max(carrot, avocado, tomato));
console.log("Минимальная цена:" + Math.min(carrot, avocado, tomato));
console.log("Целая часть стоимости:" + Math.trunc(wholeVeg));
console.log("Сумма товаров округленная до сотен:" + ((vegetables/100).toFixed(0) * 100));
console.log("Булевое значение:" + Boolean(228 % 2));
console.log("Сумма сдачи:" + change);
console.log("Среднее значение:" + averagePrice.toFixed(2));
console.log("Случайная скидка :" + discount);
console.log("Сумма к оплате:" + (payment.toFixed(2)));
console.log("Чистая прибыль:" + (diff.toFixed(2)));
