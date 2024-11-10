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
console.log("Names:")
names.forEach(name => console.log(name))
console.log("Provinces:")
provinces.forEach(province => console.log(province))
console.log("Names and Provinces:")
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

//Exercise 2
provinces.map(province => console.log(province.toUpperCase))
