//creating a function
function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

function addTwoNumbers(number1,number2){//when we make function and what input we pass in that we call it as parameter
    let result=number1 + number2;
    return result;
}

const result = addTwoNumbers(3,5)
//console.log("Result:",result);

//add values that we gave during function calls is called arguments
//intresting things after return statement the function will not return anything

function loginUserMessage(username){
    return `${username} just logged in`
}

//console.log(loginUserMessage("Hitesh"));//when you dont pass anything it will give you undefined
//another way
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}
//console.log(loginUserMessage())

//another way
function loginUserMessage(username= "sam"){//override value
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());

function calculateCartPrice(...num1){//rest operator:means how to add multiple values
    return num1
}

//how to handle any object

const user = {
    username:"hitesh",
    price:9
}

function handleObject(anyobject){
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user); we can aslo pass directly object

//handleObject({
   // username:"sam",
    //price:599
//})

//same with array as we have done with object

const myNewArray = [200,300,400,500];

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));