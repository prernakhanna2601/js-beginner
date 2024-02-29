//chaining method or map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers  //this concept is called chaining where we can use multiple methods
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40) 

console.log(newNums);                