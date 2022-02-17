console.log("1.3");

console.log("\n");
console.log("\n");

const keys = ['Name', 'City', 'FavFood', 'FavBrand'];
const values = ['Jeremy', 'Vancouver', 'Lasagna', 'Microsoft'];

for (let i = 0; i < keys.length; i++){
    let flipLocation = Math.floor(Math.random() * keys.length);
    [keys[i], keys[flipLocation]] = [keys[flipLocation], keys[i]];
}

let newObj = {};

for (let i = 0; i < keys.length; i++){
    newObj[keys[i]] = values[i];
}

console.log(newObj);