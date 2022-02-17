console.log("1.1");

console.log("\n");
console.log("\n");

// Exercise 1

const employee = new Object();

employee.number = 1234;
employee.firstName = "Aayush";
employee.lastName = "Patel";
employee.startDate = new Date("2022-1-1");
employee.role = "administrator";
employee.phone = "(431) 388-7877";

const props = Object.getOwnPropertyNames(employee);

// 1.1.b.1

var properties = Object.getOwnPropertyNames(employee);
console.log(properties.length);

console.log("\n");

// 1.1.b.2

for (let propName of props) {
    console.log(typeof employee[propName]);
}

console.log("\n");

// 1.1.b.3

if (Object.getOwnPropertyNames(employee).includes("dateOfBirth")) {
    console.log("The Employee has a Record of Date of Birth");
} else {
    console.log("The Employee Does Not Have a Record of Date of Birth");
}

console.log("\n");

// 1.1.b.4

let nonEnumerable = [];

if (nonEnumerable.length) {
    console.log(`The following properties are not enumerable`);
    console.log(`${nonEnumerable.join(", ")}`);
} else {
    console.log("All properties are enumerable");
}

console.log("\n");

// 1.1.b.5

if (Object.isFrozen(employee)) {
    console.log("Object is Frozen");
} else {
    console.log("Object is not Frozen"); 
}

console.log("\n");
console.log("\n");