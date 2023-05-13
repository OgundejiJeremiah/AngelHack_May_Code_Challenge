function min_cost(efficiency) {
    let mincost = Infinity;
    let efficiency_sortedn = efficiency.slice().sort();
    let rem, paired;
    for (let i of efficiency_sortedn) {
      let efficiency_sorted = efficiency_sortedn.slice();
      efficiency_sorted.splice(efficiency_sorted.indexOf(i), 1);
      let pairs = [];
      for (let j = 0; j < efficiency_sorted.length; j += 2) {
        pairs.push([efficiency_sorted[j], efficiency_sorted[j + 1]]);
      }
      let cost = pairs.reduce((acc, pair) => acc + Math.abs(pair[0] - pair[1]), 0);
      if (cost < mincost) {
        mincost = cost;
        rem = i;
        paired = pairs;
      }
    }
    return [mincost, rem, paired];
  }
  
  let efficiency = [1, 3, 54, 712, 52, 904, 113, 12, 135, 32, 31, 56, 23, 79, 611, 123, 677, 232, 997, 101, 111, 123, 2, 7, 24, 57, 99, 45, 666, 42, 104, 129, 554, 335, 876, 35, 15, 93, 13];
  let results = min_cost(efficiency);
  console.log(`Worker with efficiency ${results[1]} was excluded`);
  console.log(`The paired used to get the minimum cost ${JSON.stringify(results[2])}`);
  console.log(`The minimum cost of the given array is ${results[0]}`);  