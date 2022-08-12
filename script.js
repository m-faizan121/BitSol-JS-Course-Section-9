// JS Course (Section 9)
// Data Structures and Modern Operators
// July 25, 2018

'use strict';


//////////////////////////////////// De-structuring Operator for Arrays

const programmingLanguages = ["C++", "Python", "Java", "Java Script", "C#"];

// Old way to de-structure
const v1 = programmingLanguages[0];
const v2 = programmingLanguages[1];
console.log(v1, v2);

// Using De-structuring
const [v11, v22] = programmingLanguages;
console.log(v11, v22);

//////////////////////////////////// De-structuring Operator for Objetcs
const developer = {
    "Id" : 101,
    "Name" : "Muhammad Faizan",
    "Company" : "Bitsol",
    "Post" : "Web Developer",
    "Hobbies": ["Tabble Tennis", "Takken 7", "Coding", "Cricket", "Outing"],
};
console.log(developer);

const {Id, name} = developer; // If we gave wrong key such as name, it will be undefined
console.log(Id, name); // Output: 101 undefined

const {Id:id, Name:myName} = developer; // Syntax, If we want to use our own varibales
console.log(Id, myName); // Output: 101 'Muhammad Faizan'

// If we want to use default values, if key not exists
const {salary=0} = developer; 
console.log(salary); Output: 0 // Now it will not give undefined, even it is undefined

// To swap two values using de-structuring
let value1 = 100;
let value2 = 200;
console.log(value1, value2);
[value2, value1] = [value1, value2];
console.log(value1, value2);

//////////////////////////////////// Spread Operator (...)
let cars = ["Honda", "Toyota", "Suzuki", "BMW", "Mercedes"]
console.log(cars); // Print array
// If we want to extract all values of array, we use spread (...) operator
console.log(...cars); // Output: Honda Toyota Suzuki BMW Mercedes

// Spread Operator to copy array
let carsCopy = [...cars];
console.log(carsCopy);

// To add new item along with old ones
carsCopy = [...cars, "Ferrari"]; 
console.log(carsCopy);

// To join two arrays using spread operator (...)
const cars1 = ["Honda", "Suzuki"];
const cars2 = ["Ferrari", "Mercedes"];
console.log([...cars1, ...cars2]);

//////////////////////////////////// Rest Operator (...)
// Difference between spread (...) and rest(...) is that rest is always left side of assignment and spread is on right side

const smartPhones = ["Samsung", "IPhone", "Huawei", "Oppo", "Tecno"]
const [samsung, iphone, ...others] = smartPhones;
console.log(samsung, iphone, others); // Output: Samsung IPhone ['Huawei', 'Oppo', 'Tecno']

// To pass array in function using (...)
const printArray = (...arr) => { // Rest
    console.log(...arr); // Spread 
}
// Now we can pass any number of arguments
printArray(1, 2, 3);
printArray(1, 2, 3, 4, 5);
printArray("I", "am", "a", "Web", "Developer");

/////////////////////////////////////////////// Short circuiting
console.log(false && true); // In AND, if first value is false, it will not check other conditions
console.log(false || true); // In OR, if first value is true, it will not check other conditions

//////////////////////////////////////////////// Nullish Coalescing Operator (??)

// It is similar to OR but It will only consider (null,undefined) as nullish value, not 0 or empty string
console.log(0 || 1); // return 1 (because it return second arg as 0 is false value)
console.log(0 ?? 1); // return 0 (because it return first arg as 0 is true value)

//////////////////////////////////////////////// Object Literals
// Use to make syntax short and simple

// For nested objects
const Course = {
    "CourseNo": 100,
    "Title": "Javascript",
    "Sections": 20
};
// Traditional way
const Student1 = {
    "StudentNo": 200,
    "Name": "Faiza",
    "CGPA": 3.8,
    "Course": Course // Traditional way (with key)
}; 
console.log(Student1);
// Object Literals
const Student2 = {
    "StudentNo": 200,
    "Name": "Faiza",
    "CGPA": 3.8,
    Course // Object Literals (without key)
}; 
console.log(Student2);

//////////////////////////////////////////// Optional Chaining Operator (?. )
// Use to check whether some property exist or not
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.  

console.log(Student1.Subject?.Sections); // undefined
console.log(Student1.Course?.Sections); // 20
console.log(`Student  ${Student1.name} is enrolled in ${Student1.Course?.Title} Course `);

////////////////////////////////////////// Iterating Objects using Keys
const Person = {
    "Id": 1,
    "Name": "Faizan",
    "CNIC": "37401-3197906-1",
    "Contact": "0304-5067949",
    "City": "Rawalpindi",
    "Job": "Web Developer",
    "Age": 23,
    "Sinilings": 4
}
console.log(Object.entries(Person)); // To get enteries of object
console.log(Object.keys(Person)); // To get keys of object
console.log(Object.values(Person)); // To get values of object

// Iteration
for(let key of Object.keys(Person))
{
   console.log(key + " => " + Person[key]);
}

//////////////////////////////////////////// Sets
// To store unique collection of items (no duplicates)
let set = new Set([1, 2, 3, 3, 2, 1]);
console.log(set); // {1, 2, 3}
console.log(set.add(6)); // {1, 2, 3, 6}
console.log(set.add(1)); // {1, 2, 3, 6}
console.log(set.delete(1)); // true if deleted, else false
console.log(set); // {2, 3, 6}

/////////////////////////////////////////// Map
// To store values in key-value pair
// Diff from object is that object only has string type of keys while map can have any type of key
let map = new Map([["Name", "Faizan"], [23, "Age"]]);
console.log(map); // {'Name' => 'Faizan', 23 => 'Age'}
console.log(map.set("Religion", "Islam")); // {'Name' => 'Faizan', 23 => 'Age', 'Religion' => 'Islam'}
// For same key, value will be updated
console.log(map.set("Name", "Faizee")); // {'Name' => 'Faizee', 23 => 'Age', 'Religion' => 'Islam'}
