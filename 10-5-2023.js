function minCostOfEfficiencies(efficiencies) {
  const n = efficiencies.length;
  let i, j;
  let cost, remainingCost, minCost = Infinity;
  let excludedEfficiency;
  const remainingEfficiencies = efficiencies.slice(0);

  // Sort the array of efficiencies in ascending order
  remainingEfficiencies.sort((a, b) => a - b);

  // Pair up adjacent workers
  const numPairs = Math.floor(n / 2);
  const pairs = [];
  for (i = 0; i < numPairs; i++) {
    pairs[i] = [remainingEfficiencies[2 * i], remainingEfficiencies[2 * i + 1]];
  }

  // Calculate the cost of the task for the current configuration
  cost = 0;
  for (i = 0; i < numPairs; i++) {
    cost += Math.abs(pairs[i][0] - pairs[i][1]);
  }

  // Exclude one worker at a time and find the configuration with the lowest cost
  for (i = 0; i < n; i++) {
    excludedEfficiency = remainingEfficiencies[i];

    // Create a new array of remaining efficiencies
    const newRemainingEfficiencies = remainingEfficiencies.filter((_, index) => index !== i);

    // Pair up adjacent workers in the remaining array of efficiencies
    const numRemainingPairs = Math.floor(newRemainingEfficiencies.length / 2);
    const remainingPairs = [];
    for (j = 0; j < numRemainingPairs; j++) {
      remainingPairs[j] = [
        newRemainingEfficiencies[2 * j],
        newRemainingEfficiencies[2 * j + 1]
      ];
    }

    // Calculate the cost of the task for the remaining configuration
    remainingCost = 0;
    for (j = 0; j < numRemainingPairs; j++) {
      remainingCost += Math.abs(remainingPairs[j][0] - remainingPairs[j][1]);
    }

    // Update the minimum cost if the remaining configuration has a lower cost
    if (remainingCost < minCost) {
      minCost = remainingCost;
    }
  }

  return minCost;
}

const efficiencies = [1, 3, 54, 712, 52, 904, 113, 12, 135, 32, 31, 56, 23, 79, 611, 123, 677, 232, 997, 101, 111, 123, 2, 7, 24, 57, 99, 45, 666, 42, 104, 129, 554, 335, 876, 35, 15, 93, 13];
const minCost = minCostOfEfficiencies(efficiencies);
console.log("Minimum cost of task:", minCost);
