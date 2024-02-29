let score = "33abc";// for null it gives 0 for boolean it gives 1 and 0
 console.log(typeof score);
 console.log(typeof (score));//we also write like this in the form of method

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33abc" => Nan
// true => 1; false => 0


let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
//"" => false
//"hitesh"=>true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

