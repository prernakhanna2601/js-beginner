//in this module we learn about this keyword.This keyword help to refer current context.
const user = {
    username:"hitesh",
    price:999,

    welcomeMessage:function(){ 
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);// it is always block    

//function chai(){
//    console.log(this);
//}

//chai()


// CREATING ARROW FUNCTION

//function chai(){
 //   let username = "hitesh"
  //  console.log(this.username);
//}

//chai()

//const chai = () => {   // difference between functiona and arrow function
  //  let username="hitesh"
    //console.log(this.username)
//}

//chai()

// SYNTAX OF ARROW FUNCTION: () => {}

//const addTwo = (num1,num2 ) => {
  //  return num1+num2
//}

//console.log(addTwo(3,4));

//const addTwo = (num1,num2) => num1 + num2//this is known as implicit function

//console.log(addTwo(3,4));

//another way you can use that:by putting them in brackets=>(num1+num2)

//note:if you wrap in curly braces then you have to return that..to return object just like that you need to wrap it in paraenthesis