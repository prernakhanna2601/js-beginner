//Immediately Invoked Function Expressions(IIFE):dont' forget to add semicolon after your function otherwise it will through an error

//syntax for (IIFE)
//()();

(function chai(){
    //named IIFE
    console.log(`DB Connnected`);
})();

(  (name) => {
    //unnamed IIFE
    console.log(`DB Connected Two ${name}`);
} )(`hitesh`)//how to pass parameter?:- here we have done it

//how to write two IIFE together in that case semicolon plays a major role