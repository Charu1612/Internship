//Merge two arrays using concat().
 var num1=[1,2,3,4];
 var num2=[5,6,7,8];
 var c=num1.concat(num2);
 console.log("The concatination array is: ",c);

 //Use splice() to remove 2 elements from the middle.
 num1.splice(2,1);
 console.log("The array after splice",num1);

 // Sort a numeric array.
var num=[6,3,8,4,9,1];
num.sort((a,b)=>a-b);
console.log("The array after sorting: ",num);

//Check if an array includes a specific item.
 console.log("The array includes 3: ",num.includes(3));

 //Find the index of an element.
 a=num.indexOf(3)
 console.log("The index of the array 3:" ,a);