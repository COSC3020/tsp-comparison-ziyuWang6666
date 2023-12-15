// 5 * 5
var dm0 = [
    [82,17,27,46,54],
    [62,15,68,18,58],
    [24,65,20,75,28],
    [33,24,45,37,63],
    [82,54,94,87,85]
];
// 10 * 10
var dm1 = [
    [67,44,15,38,51,49,31,88,19,58],
    [42,70,54,92,98,80,31,38,47,31],
    [43,43,20,63,55,50,70,57,43,40],
    [58,43,34,35,82,99,53,51,69,95],
    [50,29,66,39,79,21,28,19,50,29],
    [82,40,93,42,85,19,38,60,76,81],
    [47,97,36,34,16,85,23,64,70,81],
    [47,32,83,32,70,62,49,80,12,27],
    [84,60,18,37,41,99,25,36,71,17],
    [44,42,39,18,65,76,16,40,28,51]
];
// 15 * 15
var dm2 = [
    [64,83,41,10,97,90,10,45,47,78,27,10,87,93,97],
    [16,17,91,74,21,20,99,61,16,84,62,47,13,66,22],
    [34,38,76,35,35,81,71,17,52,17,63,16,44,83,93],
    [13,19,26,73,81,11,55,30,34,86,77,85,49,21,45],
    [87,37,59,88,10,18,97,83,41,85,99,49,55,73,14],
    [33,38,44,39,69,43,63,75,52,93,88,52,94,84,26],
    [19,29,29,62,38,85,25,58,69,84,71,99,47,85,26],
    [39,40,20,77,48,81,50,48,11,97,54,95,43,55,36],
    [45,60,15,34,14,54,80,37,10,75,31,46,73,51,97],
    [59,94,53,87,57,33,53,48,82,40,90,56,53,41,30],
    [67,97,57,19,14,57,51,48,49,92,17,74,57,67,22],
    [21,20,91,77,59,51,45,81,81,27,38,43,62,28,54],
    [46,85,12,23,67,78,18,64,75,43,82,22,61,47,42],
    [53,41,52,76,83,72,93,40,66,16,84,61,28,21,50],
    [11,79,29,78,56,76,37,81,76,45,32,33,79,54,50]
];

// 20 * 20
var dm3 = [
    [70,55,52,84,76,43,37,33,96,67,59,48,48,19,15,42,34,56,85,60],
    [55,13,97,37,84,87,85,64,25,69,50,33,20,77,61,40,53,16,71,87],
    [48,82,26,69,32,44,58,71,27,62,55,58,76,75,46,78,64,46,37,52],
    [41,98,40,31,86,62,48,49,52,93,92,35,60,41,63,85,37,77,96,85],
    [83,98,84,77,13,64,29,21,27,46,48,57,81,83,13,76,62,66,59,74],
    [28,79,54,33,24,26,77,47,65,32,37,29,63,29,17,77,87,38,32,63],
    [59,61,94,24,80,43,37,80,27,62,53,15,53,84,98,40,57,63,92,42],
    [14,64,70,18,50,78,66,62,55,40,96,55,91,82,98,53,39,87,21,13],
    [28,45,34,86,61,35,56,96,44,19,52,39,95,79,16,91,35,35,21,39],
    [86,66,65,77,68,98,27,31,17,65,64,40,96,59,12,32,45,53,46,52],
    [67,39,31,66,21,50,17,69,67,16,31,70,59,37,63,67,87,95,55,19],
    [45,85,61,15,66,65,60,77,77,89,15,84,39,61,79,16,58,71,32,67],
    [21,46,70,23,53,60,14,32,72,78,63,75,32,12,42,26,42,11,40,77],
    [60,63,32,25,38,14,89,96,86,18,29,58,29,19,27,80,15,40,63,97],
    [85,88,76,13,37,40,44,56,74,78,23,62,49,33,55,20,51,46,98,23],
    [38,72,41,92,16,58,91,44,71,74,56,20,42,42,13,33,91,11,94,33],
    [55,25,32,49,97,63,91,49,44,46,69,85,94,89,11,52,98,28,85,22],
    [67,35,44,26,76,33,81,23,93,12,39,83,39,42,29,43,81,96,74,76],
    [53,22,27,70,17,67,21,16,90,42,80,47,32,95,98,94,48,89,26,75],
    [48,90,77,34,81,24,57,68,28,32,37,31,23,36,80,67,79,16,76,42]
]

// 30 * 30
var dm4 = [
    [70,55,52,84,76,43,37,33,96,67,59,48,48,19,15,42,34,56,85,60],
    [55,13,97,37,84,87,85,64,25,69,50,33,20,77,61,40,53,16,71,87],
    [48,82,26,69,32,44,58,71,27,62,55,58,76,75,46,78,64,46,37,52],
    [41,98,40,31,86,62,48,49,52,93,92,35,60,41,63,85,37,77,96,85],
    [83,98,84,77,13,64,29,21,27,46,48,57,81,83,13,76,62,66,59,74],
    [28,79,54,33,24,26,77,47,65,32,37,29,63,29,17,77,87,38,32,63],
    [59,61,94,24,80,43,37,80,27,62,53,15,53,84,98,40,57,63,92,42],
    [14,64,70,18,50,78,66,62,55,40,96,55,91,82,98,53,39,87,21,13],
    [28,45,34,86,61,35,56,96,44,19,52,39,95,79,16,91,35,35,21,39],
    [86,66,65,77,68,98,27,31,17,65,64,40,96,59,12,32,45,53,46,52],
    [67,39,31,66,21,50,17,69,67,16,31,70,59,37,63,67,87,95,55,19],
    [45,85,61,15,66,65,60,77,77,89,15,84,39,61,79,16,58,71,32,67],
    [21,46,70,23,53,60,14,32,72,78,63,75,32,12,42,26,42,11,40,77],
    [60,63,32,25,38,14,89,96,86,18,29,58,29,19,27,80,15,40,63,97],
    [85,88,76,13,37,40,44,56,74,78,23,62,49,33,55,20,51,46,98,23],
    [38,72,41,92,16,58,91,44,71,74,56,20,42,42,13,33,91,11,94,33],
    [55,25,32,49,97,63,91,49,44,46,69,85,94,89,11,52,98,28,85,22],
    [67,35,44,26,76,33,81,23,93,12,39,83,39,42,29,43,81,96,74,76],
    [53,22,27,70,17,67,21,16,90,42,80,47,32,95,98,94,48,89,26,75],
    [48,90,77,34,81,24,57,68,28,32,37,31,23,36,80,67,79,16,76,42]
]
// tsp local research
function twoOptSwap(route, i, k) {
    const createRoute = route.slice();//equal copied a new one
    const willReverse = createRoute.slice(i + 1, k + 1);
    const reverseParts = willReverse.reverse();
    createRoute.splice( i + 1, reverseParts.length, ...reverseParts);
    return createRoute;
}

function countPathLength(route, dis) {
    var totalLength = 0;
    for(var i = 0; i < route.length -1; i++) {
        totalLength += dis[route[i]][route[i+1]];
    }
    totalLength += dis[route[route.length - 1]][route[0]];
    return totalLength;
}

function tsp_ls(distance_matrix) {
    var len = distance_matrix.length;
    if(len <= 1) return 0;
    var currentRoute = [...Array(len).keys()];
    var cur = currentRoute.slice();
    const maxIterate = len * len;
    for(var j = 0; j < maxIterate; j++) {
        let i = Math.floor(Math.random() * len);
        let k;
        do {
            k = Math.floor(Math.random() * len);
        } while (k === i);
        const newRoute = twoOptSwap(currentRoute, i, k);
        if (countPathLength(newRoute, distance_matrix) < countPathLength(currentRoute, distance_matrix)) {
            currentRoute = newRoute;
            cur = newRoute;
        }
    }
    return countPathLength(cur, distance_matrix);
}
function calculateElapsedTime(startTime, endTime) {
    return endTime - startTime;
}
// let startTimeLocal = new Date();
let matrices = [dm0, dm1, dm2, dm3, dm4];
for(var i = 0; i < 5; i++) {
    let iterationStartTime = new Date();
    // console.log(i, 'what ');
    tsp_ls(matrices[i]);
    let iterationEndTime = new Date();
    let iterationTimeElapsed = calculateElapsedTime(iterationStartTime, iterationEndTime);

    console.log(`Execution time for tsp_ls('dm${i}'): ${iterationTimeElapsed} milliseconds`);
}

// let endTimeLocal = new Date();
// let timeElapsedLocal = calculateElapsedTime(endTimeLocal, startTimeLocal);

// tsp_ls(dm1);



// tsp held karp
function tsp_hk(dm) {
    let cities = dm.map((item, index) => index);
    cities.sort();

    if (cities.length === 1) return 0;

    let cache = new Map();
    let sumDist = Infinity;

    for (let start of cities) {
      sumDist = tsp(cities, start, dm, cache);
      // let result = tsp(cities, start, dm, cache);
      // sumDist = Math.min(sumDist, result);
    }

    return sumDist;
  }

  function tsp(cities, start, dm, cache) {
    if (cities.length === 1) {
      return dm[start][cities[0]];
    } else {
      
      let key = JSON.stringify(cities) + start;

      if(cache.has(key)) {
        return cache.get(key);
      }
      let minDist = Infinity;

      for (let i = 0; i < cities.length; i++) {
        let nextStart = cities[i];
        let newCities = cities.filter((city) => city !== start);
        minDist = Math.min(minDist, dm[start][nextStart] + tsp(newCities, nextStart, dm, cache));
      }

      cache.set(key, minDist);
      return minDist;
    }
  }
// let startTimeHeldKarp = new Date();

for(var i = 0; i < 5; i++) {
    let startTimeHeldKarp = new Date();
    console.log(i, 'what ');
    tsp_hk(matrices[i]);
    let endTimeHeldKarp = new Date();
    let timeElapsedHeldKarp = calculateElapsedTime(startTimeHeldKarp, endTimeHeldKarp);

    console.log(`Execution time for tsp_hk('dm${i}'): ${timeElapsedHeldKarp} milliseconds`);
}
// console.log(tsp_hk(dm));//parameter
// let endTimeHeldKarp = new Date();
// let timeElapsedHeldKarp = endTimeHeldKarp - startTimeHeldKarp;
// https://www.tutorialspoint.com/finding-the-time-elapsed-in-javascript
