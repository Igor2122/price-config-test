function some(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const arr1Map = {};
  const arr2Map = {};

  for (let i = 0; i < arr1.length; i++) {
    arr1Map[arr1[i]] = arr1Map[arr1[i]] + 1 || 1;
    arr2Map[arr2[i]] = arr2Map[arr2[i]] + 1 || 1;
  }

  for (const key in arr1Map) {
    if (!(key ** 2 in arr2Map)) return false;
    if (arr2Map[key ** 2] !== arr1Map[key]) return false;
  }
  return true;
}

const res = some([1, 1, 2, 2, 3], [1, 1, 4, 4, 9]);
console.log(res, ": ===:res");

function same(arr1, arr2) {
  const arr1Map = {},
    arr2Map = {};
  arr1.forEach((_, i) => {
    arr1Map[arr1[i]] = arr1Map[arr1[i]] + 1 || 1;
    arr2Map[arr2[i]] = arr2Map[arr2[i]] + 1 || 1;
  });

  for (const key in arr1Map) {
    if (!(key ** 2 in arr2Map)) {
      return false;
    }
    if (arr1Map[key ** 2] !== arr2Map[key]) {
      return false;
    }
  }

  return true;
}

// const rs = same([1, 2, 3, 2], [9, 1, 4, 4]);
// console.log(rs, ": ===:rs");

function anagram(str1, str2) {
  const str1FrCounter = {};
  const str2FrCounter = {};
  for (const key of str1) {
    str1FrCounter[key] = str1FrCounter[key] + 1 || 1;
  }

  for (const key of str2) {
    str2FrCounter[key] = str2FrCounter[key] + 1 || 1;
  }

  for (const key in str1FrCounter) {
    if (str1FrCounter[key] !== str2FrCounter[key]) {
      return false;
    }
  }

  return true;
}

// console.log(anagram("meme", "emem"), ": ===:anagram('me', 'em')");
console.log(anagram("", ""), ": ===:anagram('me', 'em')");
