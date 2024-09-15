const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
console.log(capitalize('footBar'));
console.log(capitalize('nodeJs'));