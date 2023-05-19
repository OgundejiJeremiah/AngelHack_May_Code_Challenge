function printLayout(layout) {
  for (let row of layout) {
    console.log(row.join(''));
  }
  console.log();
}

function calculateLifeformScore(layout) {
  let score = 0;
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (layout[row][col] === 'X') {
        let tileNumber = row * 5 + col;
        score += Math.pow(2, tileNumber);
      }
    }
  }
  return score;
}

function getAdjacentLifeforms(layout, row, col) {
  let lifeformsCount = 0;
  const directions = [
    [0, 1],  // Right
    [0, -1], // Left
    [1, 0],  // Down
    [-1, 0]  // Up
  ];
  for (let [dx, dy] of directions) {
    let adjacentRow = row + dx;
    let adjacentCol = col + dy;
    if (
      adjacentRow >= 0 &&
      adjacentRow < 5 &&
      adjacentCol >= 0 &&
      adjacentCol < 5 &&
      layout[adjacentRow][adjacentCol] === 'X'
    ) {
      lifeformsCount++;
    }
  }
  return lifeformsCount;
}

function nextMinuteLayout(layout) {
  let newLayout = [...Array(5)].map(() => Array(5).fill('.'));
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      let lifeformsCount = getAdjacentLifeforms(layout, row, col);
      if (layout[row][col] === 'X') {
        if (lifeformsCount === 1) {
          newLayout[row][col] = 'X';
        }
      } else {
        if (lifeformsCount === 1 || lifeformsCount === 2) {
          newLayout[row][col] = 'X';
        }
      }
    }
  }
  return newLayout;
}

let startState = [
  ['X', 'X', 'X', 'X', '.'],
  ['X', '.', '.', '.', '.'],
  ['X', '.', '.', 'X', '.'],
  ['.', 'X', '.', 'X', '.'],
  ['X', 'X', '.', 'X', 'X']
];

console.log("Start state:");
printLayout(startState);

let encounteredLayouts = [startState];
let minute = 1;
let repeatedMinute;
while (true) {
  let nextLayout = nextMinuteLayout(encounteredLayouts[encounteredLayouts.length - 1]);

  if (encounteredLayouts.some(layout => isLayoutEqual(layout, nextLayout))) {
    repeatedMinute = encounteredLayouts.findIndex(layout => isLayoutEqual(layout, nextLayout));
    console.log(`\nRepeated layout: ${repeatedMinute} minute(s) and ${minute} minute(s).`);
    break;
  } else {
    encounteredLayouts.push(nextLayout);
    minute++;
  }
}

let repeatedLayout = encounteredLayouts[repeatedMinute];
let lifeformScore = calculateLifeformScore(repeatedLayout);
console.log(`Lifeform score: ${lifeformScore}`);

// Helper function to check if two layouts are equal
function isLayoutEqual(layout1, layout2) {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (layout1[row][col] !== layout2[row][col]) {
        return false;
      }
    }
  }
  return true;
}