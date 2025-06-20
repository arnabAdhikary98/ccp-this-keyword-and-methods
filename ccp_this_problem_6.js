let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

let jsonString = JSON.stringify(student);

console.log(jsonString);

// Expected Output:

// {
//   "name": "Alice",
//   "age": 22,
//   "course": "Computer Science"
// }