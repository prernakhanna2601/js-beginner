//basically scope starts with these three keywords:let,var,const
//{}:this is called scope gernally

let a = 300//global scope

if (true) {
    let a = 10//block scope
    const b = 20
   // var c = 30//it is not advisable to use var as we have seen in this program
   console.log("INNER: ",a)
}

console.log(a);
//console.log(b);
console.log(c);