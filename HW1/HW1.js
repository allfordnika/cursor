let carrot = 15.678;
let avocado = 123.965;
let tomato = 90.2345;

Math.max(carrot, avocado, tomato);
console.log(Math.max(carrot, avocado, tomato));

Math.min(carrot,avocado,tomato);
console.log(Math.min(carrot,avocado,tomato));

let vegetables = (carrot+avocado+tomato);
console.log(vegetables);

Math.trunc(vegetables);
console.log(Math.trunc(vegetables));

console.log((vegetables/100).toFixed(0) * 100)


Boolean(229 % 2)
console.log(Boolean(229 % 2))

let change = (500 - vegetables);
console.log(change);

let averagePrice = vegetables/3
console.log(vegetables/3);
averagePrice.toFixed(2)
console.log(averagePrice.toFixed(2));

let discount = Math.random() * 100
console.log(discount);

let payment = (vegetables * discount)/100
console.log(payment);
payment.toFixed(0)
console.log(payment.toFixed(2))

let costprice = vegetables / 2;
console.log(costprice);

let diff = costprice-discount;
console.log(diff);

console.log("Максимальная цена:" + Math.max(carrot, avocado, tomato));
console.log("Минимальная цена:" + Math.min(carrot, avocado, tomato));
console.log("Целая часть стоимости:" + Math.trunc(vegetables));
console.log("Сумма товаров округленная до сотен:" + ((vegetables/100).toFixed(0) * 100));
console.log("Булевое значение:" + Boolean(229 % 2));
console.log("Сумма сдачи:" + change);
console.log("Среднее значение:" + averagePrice.toFixed(2));
console.log("Случайная скидка:" + (payment.toFixed(2)));
console.log("Выгода:" + (diff.toFixed(2)));
