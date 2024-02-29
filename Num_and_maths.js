const score = 400;
//console.log(score);

//const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

//const otherNumber = 123.8976;
//console.log(otherNumber.toPrecision(4));


//const hunderds = 1000000;
//console.log(hunderds.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.sqrt(2));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.9));
//console.log(Math.min(4,5,2,1));
//console.log(Math.max(7,4,9,3));

//console.log(Math.random());
//console.log(Math.random()*10+1);
//console.log(Math.floor(Math.random()*10+1));

const min = 10;
const max = 20;
//console.log(Math.floor(Math.random() * (max-min+1) + min));
 //+++++++++++++++++++++++++++++++++++++++DATE AND TIME+++++++++++++++++++++++++++++++++++++++++

 // Dates

 let myDate = new Date();
 //console.log(myDate.toString());
 //console.log(myDate.toDateString());
 //console.log(myDate.toLocaleString());
 //console.log(typeof myDate);

 //another way

 //let myCreatedDate = new Date(2023,0,23);
 //console.log(myCreatedDate.toDateString());
 //let myCreatedDate = new Date(2023,0,23,5,3);
 //console.log(myCreatedDate.toLocaleString());
 //let myCreatedDate = new Date("2023-01-14");
 //console.log(myCreatedDate.toLocaleString());
 let myCreatedDate = new Date("01-14-2023");
 //console.log(myCreatedDate.toLocaleString());

 //timestamps:for designing quizes and polls it gives value in miliseconds

 let myTimeStamp = Date.now();
 //console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
 //console.log(Math.floor(Date.now()/1000));//for converting it into seconds

 //some more methods

 let newDate = new Date();
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getDay());

// localestring method what we have studied before it is very intresting because in this we defined object and we can pass parameter in this

newDate.toLocaleString('default',{
    weekday: "long",                      //it works same as localestring before it makes it more customize
    timezone:''
})