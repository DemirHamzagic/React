// 1. Zadatak
function findLongestWordLength(str) {
  let niz = [];
  let brojac = 0;
  let index = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i == str.length) {
      niz[index] = brojac;
    } else if (str[i] != " ") {
      brojac++;
    } else {
      niz[index] = brojac;
      brojac = 0;
      index++;
    }
  }
  let max = niz[0];
  for (let i = 1; i <= niz.length; i++) {
    if (max < niz[i]) {
      max = niz[i];
    }
  }
  console.log(niz);
}

findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
);

// 2. Zadatak
function largestOfFour(arr) {
  let niz = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
      }
    }
    niz[i] = max;
  }
  console.log(niz);
}

largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

// 3. Zadatak

function truncateString(str, num) {
  let niz = "";
  if (str.length > num) {
    for (let i = 0; i < num; i++) {
      niz += str[i];
    }
    niz += "...";
    console.log(niz);
  } else {
    console.log(str);
  }
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);

// 4. Zadatak

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      console.log(arr[i])
    } else {
      return undefined;
      console.log()
    }
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
