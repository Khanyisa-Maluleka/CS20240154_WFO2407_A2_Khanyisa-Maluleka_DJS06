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

console.log("Exercise 1: forEach method") //Exercise 1
console.log("\nNames:")
names.forEach(name => console.log(name))
console.log("\nProvinces:")
provinces.forEach(province => console.log(province))
console.log("\nNames and Provinces:")
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))


console.log("\nExercise 2: Provinces to Uppercase") //Exercise 2
const provinceToUpperCase = provinces.map(province => province.toUpperCase())
console.log(provinceToUpperCase)


console.log("\nExercise 3: Name Lengths") //Exercise 3
const nameLength = names.map(name => name.length)
console.log(nameLength)


console.log("\nExercise 4: Sorting Provinces") //Exercise 4
const sortingProvinces = [...provinces].sort();
console.log(sortingProvinces);


console.log("\nExercise 5: Provinces without 'Cape'") //Exercise 5
const provincesWithoutCape = provinces.filter(province => !province.includes("Cape"));
console.log(`Number of provinces with 'Cape': ${provinces.length - provincesWithoutCape.length}`);


console.log("\nExercise 6: Finding 'S'") //Exercise 6
const containsS = names.some(name => name.toLowerCase().includes("s"))
names.map(name => containsS ? console.log(name) : name)


console.log('\nExercise 7: Names to Provinces Map'); //Exercise 7
const nameAndProvince = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index];
    return accumulator;
}, {});
console.log(nameAndProvince);



console.log("\nAdvanced Exercise 1: Logging Products") //Advanced Exercise 1
products.forEach(item => console.log(item.product))

console.log("\nAdvanced Exercise 2: Filtering Products") //Advanced Exercise 2
console.log(products.filter(item => item.product.length>5))

console.log("\nAdvanced Exercise 3: Total Price") //Advanced Exercise 3
console.log(products
        .filter(item => item.price !== '' && item.price !== ' ')
        .reduce((total, item) => total + Number(item.price), 0)
);

//Advanced Exercise 4
console.log("\nAdvanced Exercise 4: Concatenating Product Names into a Single String")
products.reduce(item => m)

//Advanced Exercise 5
console.log('\nAdvanced Exercise 5: Price Extremes');
console.log(
    products.reduce((extremes, item) => {
        const price = Number(item.price);
        if (!isNaN(price) && item.price !== '' && item.price !== ' ') {
            if (!extremes.highest || price > extremes.highest.price) {
                extremes.highest = { product: item.product, price };
            }
            if (!extremes.lowest || price < extremes.lowest.price) {
                extremes.lowest = { product: item.product, price };
            }
        }
        return extremes;
    }, { highest: null, lowest: null }),
    result => `Highest: ${result.highest.product} (${result.highest.price}). Lowest: ${result.lowest.product} (${result.lowest.price})`
);



