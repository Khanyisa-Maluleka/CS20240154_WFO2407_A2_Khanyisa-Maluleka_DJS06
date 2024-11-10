// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Exercise 1
console.log("Exercise 1: forEach method")
console.log("\nNames:")
names.forEach(name => console.log(name))
console.log("\nProvinces:")
provinces.forEach(province => console.log(province))
console.log("\nNames and Provinces:")
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

//Exercise 2
console.log("\nExercise 2: Provinces to Uppercase")
const provinceToUpperCase = provinces.map(province => province.toUpperCase())
console.log(provinceToUpperCase)

//Exercise 3
console.log("\nExercise 3: Name Lengths")
const nameLength = names.map(name => name.length)
console.log(nameLength)

//Exercise 4
console.log("\nExercise 4: Sorting Provinces")
const sortingProvinces = [...provinces].sort();
console.log(sortingProvinces);

//Exercise 5
console.log("\nExercise 5: Provinces without 'Cape'")
const provincesWithoutCape = provinces.filter(province => !province.includes("Cape"));
console.log(`Number of provinces with 'Cape': ${provinces.length - provincesWithoutCape.length}`);

//Exercise 6
console.log("\nExercise 6: Finding 'S'")
const containsS = names.some(name => name.toLowerCase().includes("s"))
names.map(name => containsS ? console.log(name) : name)

//Exercise 7
console.log('\nExercise 7: Names to Provinces Map');
const nameAndProvince = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index];
    return accumulator;
}, {});
console.log(nameProvinceMap);
