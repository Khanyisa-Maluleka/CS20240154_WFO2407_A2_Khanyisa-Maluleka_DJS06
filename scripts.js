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
const containsS = names.map(name => name.toLowerCase().includes("s"))
console.log(containsS)

//Exercise 7
console.log('\nExercise 7: Names to Provinces Map'); 
const nameAndProvince = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index];
    return accumulator;
}, {});
console.log(nameAndProvince);


//Advanced Exercise 1
console.log("\nAdvanced Exercise 1: Logging Products") 
products.forEach(item => console.log(item.product))

//Advanced Exercise 2
console.log("\nAdvanced Exercise 2: Filtering Products") 
console.log(products.filter(item => item.product.length>5))

//Advanced Exercise 3
console.log("\nAdvanced Exercise 3: Total Price") 
console.log(products
        .filter(item => item.price !== '' && item.price !== ' ')
        .reduce((total, item) => total + Number(item.price), 0)
);

//Advanced Exercise 4
console.log("\nAdvanced Exercise 4: Concatenating Product Names into a Single String")
console.log('Products:', products.reduce((str, item) => str + item.product + ', ', '').slice(0, -2));

//Advanced Exercise 5
console.log('\nAdvanced Exercise 5: Price Extremes');
console.log( products.reduce((extremes, item) => {
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

//Advanced Exercise 6
console.log('\nAdvanced Exercise 6: Transformed Products');
console.log(products.reduce((acc, curr) => {
      acc.push({
          name: curr.product,
          cost: curr.price
      });
      return acc;
  }, [])
);

