// create an array of 5 fruits//
var fruits=["apple","banana","mango","grapes","cherry"];
console.log(fruits);

//print the third one//
console.log(fruits[2]);

//Add an element at the end using push()//
fruits.push("orange");
console.log(fruits);

//Remove the element using shift//
fruits.shift();
console.log(fruits);
dd
//Print the length of an array.//
console.log(fruits.length);

// Loop through an array and print each item//
fruits.forEach(num=>console.log(num));

//reverse an array.//
fruits.reverse();

//Find the sum of numbers in an array.//
var num=[1,2,3];
var sum=0;
num.forEach(numbers=>(sum=sum+numbers));
console.log(sum);
