//HIGHER ORDER ARRAY LOOPS:THESE ARE ARRAY SPECIFIC
//1:FOR OF LOOP:

const arr=[1,2,3,4,5]

for(const num of arr){
 //   console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings){
    //console.log(greet);
    //console.log(`each char is ${greet}`);
}

//MAPS:its a object that hold key value,collection of key value pair:its known for unique key value pair

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('FR',"FRANCE")

//console.log(map);

for(const [key,value] of map){//it is known as destructring of array
    //console.log(key,':-',value);
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}

//for(const [key,value] of myObject){
    //console.log(key,':-',value);//there is another way to run object it is not for object
}


