// Check if string contains any vowels, return number of vowels

function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for(let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  console.log(count);
  return count;
}

function vowels(str) {
  let matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

vowels('wedbaQWWETYw')