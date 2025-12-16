// Задание 3
function showWeather(city,temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

// Пример вызова:
showWeather("Москва",22)

//Задание 4
const speedOflight = 299792458; //м/с

function checkSpeed(speed) {
  if (speed > speedOflight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOflight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

// Пример вызова:
 checkSpeed(300000000);
 checkSpeed(100000000);
 checkSpeed(299792458);

// Задание 5
 const product = "Ноутбук";
 const productPrice = 800;

 function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$,пополните баланс`);
  }
 }

 // Пример вызова:
 buyProduct(1000);
 buyProduct(500);

// Задание 6: Функция по своему усмотрению
 function greetUser(name) {
  console.log(`Добро пожаловать, ${name}! Желаем продуктивной учебы.`);
 }

 // Пример вызова:
 greetUser("Дикий огурец");

// Задание 7: 3 переменные по своему усмотрению
const userAge = 25;
const isLoggedIn = true;
const favoriteColors = ["синий", "зелёный", "чёрный"];

// Для проверки можно вывести переменные в консоль:
console.log(userAge, isLoggedIn, favoriteColors);