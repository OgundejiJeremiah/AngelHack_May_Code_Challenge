function distance_ran(speed, run_time, rest_time, total_time) {
  // Calculate the distance covered by each runner
  let distance = 0;
  let time_elapsed = 0;
  while (time_elapsed < total_time) {
    if (time_elapsed % (run_time + rest_time) < run_time) {
      distance += speed;
    }
    time_elapsed += 1;
  }
  return distance;
}

console.log("At the end of 1234th seconds:");
console.log(`John has run a total of ${distance_ran(10, 6, 20, 1234)}m`);
console.log(`James has run a total of ${distance_ran(8, 8, 25, 1234)}m`);
console.log(`Jenna has run a total of ${distance_ran(12, 5, 16, 1234)}m`);
console.log(`Josh has run a total of ${distance_ran(7, 7, 23, 1234)}m`);
console.log(`Jacob has run a total of ${distance_ran(9, 4, 32, 1234)}m`);
console.log(`Jerry has run a total of ${distance_ran(5, 9, 18, 1234)}m`);
console.log("Therefore, the winning runner is Jenna with a distance of 3540m");
