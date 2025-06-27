//Print "Hello, World!" in the browser console
var a="Hello World!";
console.log(a);

//Declare a name and age variable, and print them using console.log() 
var name="Charu";
var age=19;
console.log("My name is: ",name);
console.log("My age is: ",age);

//Check the type of various variables using typeof .
var a=5;
var b="Charu";
console.log(typeof(a));
console.log(typeof(b));

//Convert a string "25" into a number.
var a="25";
var b=Number(a);
console.log(b);

//Swap two variable values using a temporary variable
var a=5;
var b=6;
var c=a;
a=b;
b=c;
console.log(a,b);

//Print numbers from 1 to 10 using a for loop
for (i=0;i<10;i++);
console.log(i);

//map function
const  fruits=new Map([
    ["apples",500],
    ["banana",300],
    ["orange",200]
]);
let num=fruits.get("apples");
console.log(num);

//map size
console.log(fruits.size);

//set map
