//creating object
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.instructor:this is very annoying by assesing objects everytime with dot operator
//another way
const {courseInstructor:instructor} = course;//way to destructring of an object
//console.log(courseInstructor);
console.log(instructor);


