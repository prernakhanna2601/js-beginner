// array:whenever we write it in square brackets

const myArr = [1,4,5,7,'true',9]//one way to create a array
const myHeroes = ["shaktiman","naagraj"];//another way

const myArr2 = new Array(1,2,4);//another way


// one important thing to remember array make shallow copy
//Shallow copy: A Shallow copy of an object is a copy whose properties share the same refrences.
//Deep copy: A Deep copy of an object is a copy whose properties do not share the same refrences.

//Array methods
//myArr.push(6);
//myArr.pop()
//myArr.unshift(7);//simply add the element at the beginning
//myArr.shift();//remove the element from the begining.

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

//const newArr = myArr.join();
//console.log(typeof newArr);
//console.log(myArr);

//Slice, Splice: slice doesnot manipulate origional array whereas splice manipulate origional array in interviews we answer this question that slice doesn't print the range whereas splice print the range but this is not correct answer.

console.log("A" , myArr);


const myny1 = myArr.slice(1,3);
console.log("B",myArr);
console.log(myny1);

const myny2 = myArr.splice(1,3);
console.log("B",myArr);
console.log(myny2);
