//object decleration

//const tinderUser = new Object()//this is singleton
const tinderUser = {};//this is non-singleton
 tinderUser.id = "123abc"
 tinderUser.name = "hitesh"
 tinderUser.isloggedIn = false

 //console.log(tinderUser);

 const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
 }

 //console.log(regularUser.fullname.userfullname.firstname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a",4: "d"}

 //const obj3 = {obj1,obj2}
 //const obj3 = Object.assign({},obj1,obj2)
 const obj3 = {...obj1,...obj2}//most probably we gonna use this syntax
 console.log(obj3);

 users[1].email
 console.log(tinderUser);

 console.log(objects.keys(tinderUser));
 console.log(objects.values(tinderUser));
 console.log(object.entries(tinderUser));


 console.log(tinderUser.hasOwnProperty('islogged'));
