// Competitors

const competitors = [
  {
    name: "Alina",
    bookTitles: ["Atomic Habits", "Harry Potter", "Rich Dad Poor Dad"],
    totalPages: [320, 450, 300],
    pagesRead: [300, 400, 250],
  },

  {
    name: "Mahdia",
    bookTitles: ["Deep Work", "JavaScript Guide", "The Alchemist"],
    totalPages: [400, 350, 250],
    pagesRead: [400, 300, 250],
  },

  {
    name: "Sara",
    bookTitles: ["Deep Work", "1984", "Think and Grow Rich"],
    totalPages: [300, 350, 280],
    pagesRead: [250, 300, 200],
  },

  {
    name: "Ali",
    bookTitles: ["HTML Basics", "CSS Mastery", "Bootstrap"],
    totalPages: [200, 250, 300],
    pagesRead: [150, 200, 250],
  },
];

// Introduction

console.log("===== Reading Championship =====");

for (let i = 0; i < competitors.length; i++) {
  console.log(
    "Welcome " + competitors[i].name + " to the Reading Championship!",
  );
}

// Function 1

function calculateProgress(pagesRead, totalPages) {
  return (pagesRead / totalPages) * 100;
}

// Function 2

function calculateTotalPagesRead(pagesReadArray) {
  let total = 0;

  for (let i = 0; i < pagesReadArray.length; i++) {
    total += pagesReadArray[i];
  }

  return total;
}

// Function 3

function calculateCompletionRate(pagesReadArray, totalPagesArray) {
  let totalPercent = 0;

  for (let i = 0; i < pagesReadArray.length; i++) {
    totalPercent += calculateProgress(pagesReadArray[i], totalPagesArray[i]);
  }

  return totalPercent / pagesReadArray.length;
}

// Function 4

function awardPoints(totalPages, completionRate) {
  return totalPages + completionRate * 2;
}

// Testing & Debugging

console.log("===== Function Testing =====");

console.log("Progress Test:", calculateProgress(50, 100));

console.log("Total Pages Test:", calculateTotalPagesRead([100, 200, 300]));

console.log(
  "Completion Rate Test:",
  calculateCompletionRate([50, 100], [100, 100]),
);

console.log("Award Points Test:", awardPoints(600, 75));

console.log("============================");

// Leaderboard

const scores = [];

for (let i = 0; i < competitors.length; i++) {
  let competitor = competitors[i];

  let totalPagesRead = calculateTotalPagesRead(competitor.pagesRead);

  let completionRate = calculateCompletionRate(
    competitor.pagesRead,
    competitor.totalPages,
  );

  let finalScore = awardPoints(totalPagesRead, completionRate);

  let title = "";

  if (totalPagesRead >= 400) {
    title = "Reading Star";
  } else if (totalPagesRead >= 250) {
    title = "Dedicated Reader";
  } else {
    title = "Rising Reader";
  }

  console.log("--------------------------");
  console.log("Name: " + competitor.name);
  console.log("Pages Read: " + totalPagesRead);
  console.log("Average Completion: " + completionRate.toFixed(2) + "%");
  console.log("Final Score: " + finalScore.toFixed(2));
  console.log("Title: " + title);

  scores.push({
    name: competitor.name,
    score: finalScore,
  });
}

// Find Champion

let champion = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i].score > champion.score) {
    champion = scores[i];
  }
}

// Winner

console.log("--------------------------");
console.log(
  "Champion of the Reading Championship: " +
    champion.name +
    " with " +
    champion.score.toFixed(2) +
    " points!",
);
