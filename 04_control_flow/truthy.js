const userEmail = []//it has it own set of rules it consider empty is equal to false or has something is equal to true these values are called truthy and falsy values

if(userEmail){
    console.log("Got user Eamil");
} else {
    console.log("Don't have user Email");
}

//Falsy Values

//false,0,-0,BigInt 0n,"",null,undefined,Nan

//TRuthy Values
//"0",'false'," ",[],{},function(){},

//Nullish Coalescing Operator (??): null undefined//basically used for null or undefined values

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;//in this value that is written first is printed first
console.log(val1);

//NOTE: NULLISH COALESCING OPERATOR AND TERNARY OPERATOR BOTH ARE DIFFERENT
//TERNARY OPERATOR


//syntax:condition ? true : false

const iceTeaPrice = 100
iceTeaPrice<= 80 ? console.log("less than 80"):console.log("more than 80");

///summary:here in this module we basically check control,conditions