/*const orderPieces = 1;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';
const quantity = prompt(`Введите количество товаров`);

let totalPrice = orderPieces * pricePerDroid;
let balanceCredit = credits - totalPrice;
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
} else if (totalPrice <= credits && totalPrice >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
}

console.log(message);*/

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

/*const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt(`Введите количество товаров`);
const CANCELED_BY_USER = 'Отменено пользователем!';

let totalPrice = quantity * pricePerDroid;

if (quantity === null) {
    message = CANCELED_BY_USER;
} else if (quantity * pricePerDroid) {
    message = totalPrice;
}

console.log(quantity);*/
