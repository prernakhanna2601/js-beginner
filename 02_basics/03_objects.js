//how to declare objects there are two ways: // Singleton //object.create

// object literals:way to declare object

const mySym = Symbol("key1")
const jsUser = {
    name:"Hitesh",
    [mySym]: "mykey1",//to use symbol it is preferable to use square brackets
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedIn:false,
    lastLoggedInDays: ["Monday","Saturday"]
}

//how to access objects

//console.log(jsUser.email);//one way
//console.log(jsUser["email"]);//another way:better one 
//console.log(jsUser[mySym]);
//console.log(typeof jsUser.mySym);

//how to change values

jsUser.email = "hitesh@chatgpt";
//Object.freeze(jsUser);//it basically freezes the object so that no one can change it later
jsUser.email = "hitesh@microsoft";
//console.log(jsUser);


//functions

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());