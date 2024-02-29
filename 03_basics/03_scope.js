function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log("username");
    }
    console.log(website);

    two()

}

//one()

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//++++++++++++++++ Another Concept +++++++++++++++++

//
function addone(num){
    return num + 1
}

console.log(addone(5));


//addTwo() we can't call it before initialization this is a concept oh hosting......here it didn't run because in this we store a function in a variable whereas in upper we declare it.
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));