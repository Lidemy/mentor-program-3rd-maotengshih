function capitalize(str) {
  let result = '';
  result = str[0].toUpperCase() + str.slice(1);
  // console.log(result);
  return result;
}

capitalize('hello');
console.log(capitalize('hello'));
console.log(capitalize(',hello'));
console.log(capitalize('Hello'));
