function permute(string) {
    // Convert the string to an array of characters
    const charArr = string.split('');
  
    // Generate all the permutations of the characters
    const permutations = permutate(charArr);
  
    // Convert each permutation array to an integer
    const permutationsInt = permutations.map(perm => parseInt(perm.join('')));
  
    console.log(`The possible permutations are ${permutationsInt}`);
  
    const divisibleBy7 = permutationsInt.filter(num => num % 7 === 0);
  
    console.log(`The ones that are divisible by 7 ${divisibleBy7}`);
  
    const maxNum = Math.max(...divisibleBy7);
    const minNum = Math.min(...divisibleBy7);
    const average = (maxNum + minNum) / 2;
  
    return average;
  }
  
  function permutate(arr) {
    if (arr.length === 1) {
      return [arr];
    }
  
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const permutations = permutate(rest);
  
      for (let j = 0; j < permutations.length; j++) {
        result.push([arr[i], ...permutations[j]]);
      }
    }
  
    return result;
  }
  
  console.log(`The average of the largest and smallest permutation is ${permute('1867')}`);  