const course = {
    courseName: 'fullstack',
    courseFee: 999,
    courseInstructor: 'hitesh'
}

// ******************* DE - STRUCTURE ***********************

const {courseInstructor} = course;
console.log(courseInstructor);

// ********* WE CAN ALSO GIVE SIMPLE NAME WHILE DE - STRUCTURING

const {courseInstructor:teacher} = course;
console.log(teacher);