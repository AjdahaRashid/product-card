const myDetails = {
  name: "Дикий огурец",
  age: 72,
  country: "Россия",
  city: "Кизляр",
  profession: "Бизнесмен",
  hobby:"Спорт" 
}

const myCar = {
  brand:"Феррари",
  model:"812 competizione",
  yearOfManufacture:"2025",
  color:"Белый",
  transmission:"Механика"
}
myCar.owner = myDetails
console.log(myCar);

// задание 5

function checkAndAddMaxSpeed(carObj) {
  if (carObj.maxSpeed  === undefined) {
    carObj.maxSpeed = 350;
  }
}
checkAndAddMaxSpeed(myCar);
console.log(myCar)

// задание 6

function displayInfo(myCar, model) {
  console.log(myCar[model])
}
displayInfo(myCar,"model")

// задание 7

let products = ["Блины","Варенье","Чай"]
console.log(products)

// задание 8

let books = [
  {
    name:"Преступление и наказание",
    author:"Федор Достоевский",
    genre:"психологический роман",
    yearOfPublication:"1866"
  },
  {
    name:"Автостопом по галатике",
    author:"Дуглас Адамс",
    genre:"научно-фантастическая комедия",
    yearOfPublication:"1977"
  },
  {
    name:"Убийство в Восточном экспрессе",
    author:"Агата Кристи",
    genre:"детектив",
    yearOfPublication:"1934"
  }
]

// добавление четвертую книгу через push

books.push({
  name:"1984",
  author:"Джордж Оруэл",
  genre:"антиутопия",
  yearOfPublication:"1949",
})
console.log(books);

// 9 задание

let potterBooks = [
  {
    name:"Гарри Поттер и философский камень",
    author:"Дж.К.Ролинг",
    genre:"фэнтези",
    yearOfPublication:"1997"
  },
  {
    name:"Гарри Поттер и Тайная комната",
    author:"Дж.К.Ролинг",
    genre:"фэнтези",
    yearOfPublication:"1998"
  },
  {
    name:"Гарри Поттер и узник Азкабана",
    author:"Дж.К.Ролинг",
    genre:"фэнтези",
    yearOfPublication:"1999"
  }
]

let allBooks = [...books, ...potterBooks];
console.log(allBooks)

// 10 задание 

let booksTagged = allBooks.map(function(books){
  let year = Number(books.yearOfPublication);
  if (year < 1950) {
    books.isRare = true;
  } else {
    books.isRare = false;
  }
  return books;
})
console.log(booksTagged)