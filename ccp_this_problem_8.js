function personInfo(name, age) {
 console.log(`Name of the person is ${name}, age is ${age}.`);
}

let person = { name: "John", age: 30};

personInfo.call(person, person.name, person.age); // Expected Output: Name of the person is John, age is 30.