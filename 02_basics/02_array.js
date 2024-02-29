const marvel_heroes = ["thor","spiderman","ironman"];
const dc_heroes = ["superman","flash","batsman"];

//marvel_heroes.push(dc_heroes);
const all_heroes = marvel_heroes.concat(dc_heroes);//here we can see differnce between push and concat push insert the array as single element
//console.log(marvel_heroes);
//console.log(all_heroes);
//spread method

const all_new_heroes = [...marvel_heroes,...dc_heroes];//it is most preferable than concat moth are similar 
//console.log(all_new_heroes);
const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5]];
const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

//console.log(Array.isArray("Hitesh"));
//console.log(Array.from("Hitesh"));
//console.log(Array.from({name:"Hitesh"}));//interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//returns new array from set of elements
