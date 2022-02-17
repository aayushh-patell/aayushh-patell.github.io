console.log("1.2");

console.log("\n");
console.log("\n");

const shallowCopy = (obj) => {
    return {...obj};
}

const deepCopy = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}

const originalObject = {
    name: "Aayush",
    nestedObject: {grade: "A"}
}

const shallowCopyObject = shallowCopy(originalObject);
const deepCopyObject = deepCopy(originalObject);

console.log("Original Property Values");
console.log(originalObject);
console.log(shallowCopyObject);
console.log(deepCopyObject);

console.log("\n");

shallowCopyObject.name = "Aayushi"
deepCopyObject.name = "Ayush"

console.log("Property Values After Name Changes");
console.log(originalObject);
console.log(shallowCopyObject);
console.log(deepCopyObject);

console.log("\n");

shallowCopyObject.nestedObject.grade = "A+";

console.log("Nested Object Property Values After Changing Nested Object from ShallowCopy");
console.log(originalObject.nestedObject);
console.log(shallowCopyObject.nestedObject);
console.log(deepCopyObject.nestedObject);

console.log("\n");

deepCopyObject.nestedObject.grade = "A++";

console.log("Nested Object Property Values After Changing Nested Object from deepCopy");
console.log(originalObject.nestedObject);
console.log(shallowCopyObject.nestedObject);
console.log(deepCopyObject.nestedObject);

console.log("\n");
console.log("\n");