//Primitive:these are call by value 

//7:string,Number,Boolean,null,undefined,Symbol,BigInt
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let email;//undefined

const id =Symbol('123');
const anotherId = Symbol('123');
//console.log(id);

//console.log(anotherId);
//console.log(id === anotherId);

const bigNumber = 345654357665435674n//after writing n it is automatically converted into bigint

//Non-Primitive:these are reference type
//Array,Objects,Functions

//const heroes = ["Shaktiman","naagraj","Doga"];
/*let myObj = {             //object are writtten within curly braces and with the help of kay value pair form
    Name:"prerna",
    age:22,
}
*/

//const myFunction = function(){
  //  console.log("hello world");
//}

//console.log(typeof outsideTemp);//important one why null is object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive):here change will not reflect to origional value instaed of that we get copy of it,Heap(Non_primitive):mesns we get refrence here change will reflect to origional value

let myYoutubename = "hiteshchoudhary.com";
let anothername = myYoutubename;
anothername = "chaiorcode";

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"khannaprerna30@gmail.com",
    upi:"user@ybl",
}

let userTwo = userOne;
userTwo.email = "hiteshchoudhary.com";

console.log(userOne.email);
console.log(userTwo.email);