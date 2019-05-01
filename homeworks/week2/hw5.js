function join(arr, concatStr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    result += concatStr + arr[i];
    console.log(result);
  }
  return result;
  // return concatStr;
}

function repeat(str, times) {
  let result = '';
  for (let i = 0; i <= times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join([1, 2, 3], '!'));
console.log(repeat('a', 5));


/*
join([1, 2, 3], '')，正確回傳值：123
join(["a", "b", "c"], "!")，正確回傳值：a!b!c
join(["a", 1, "b", 2, "c", 3], ',')，正確回傳值：a,1,b,2,c,3

repeat('a', 5)，正確回傳值：aaaaa
repeat('yoyo', 2)正確回傳值：yoyoyoyo
*/
