import { socialComments } from "./comments.js";
console.log(socialComments)


// задания 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(number => number >= 5)
console.log(filteredNumbers)

// задание 3

const cars = ["mercedes", "bmw", "audi"]
const newArray = cars.includes("jeep")
console.log(newArray)

// задание 4 

function reverseArray(arr) {
  return arr.reverse();
}

const reversedNumbers = reverseArray(filteredNumbers);
const reversedCars = reverseArray(cars);
console.log(filteredNumbers)
console.log(cars)

// задание 7

const authorsWithComEmail = socialComments.filter(authorData => authorData.email.includes(".com"))
console.log(authorsWithComEmail)

// задание 8

const updatedComments = socialComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log("Updated comments:", updatedComments);

// задание 9

const cards = socialComments.map(profile => {
  return {
    id: profile.id,
    name: profile.name
  };
})
console.log(cards)

// задание 10 

const checkedCommets = socialComments.map(item => ({
  ...item,
  isInvalid: item.body.length > 180
}));
console.log(checkedCommets)

// задание 11

const emailsReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsReduce)

const emailsMap = socialComments.map(comment => comment.email);
console.log(emailsMap)

// задание 12

const emailsString = socialComments.toString();
console.log(emailsString)

const emailsJoin = socialComments.join(1);
console.log(emailsJoin)
