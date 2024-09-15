const colors = ['red', 'green', 'blue'];
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors); // Output: ['Red', 'Green', 'Blue']
