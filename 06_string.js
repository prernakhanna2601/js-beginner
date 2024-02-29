const name = "hitesh";
const repoCount = 50;

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com');//there is another way of using string its basically has some additional properties and methods
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
//console.log(newString);

const anotherString = gameName.slice(-8,4);
//console.log(anotherString);

const newStringOne = "   Hitesh   ";
//console.log(newStringOne);
//console.log(newStringOne.trim());//it remove starting and end spaces:there are two trim start or trim end


const url = "https://hitesh.com/hitesh%20choudhary";
//console.log(url.replace('%20','-'));

//console.log(url.includes('sundar'));

//console.log(gameName.split('-'));