// Sorting algorithm ----------------------------

const points = [3, 55, 64, 47];

let total = 0;
points.forEach((point) => {
  total += point;
});

console.log("Total sum of points is(forEach): " + total); // Output: Total sum of points is:169

// MAP ------------------------------------------

const pointsMap = [3, 55, 64, 47];

const newArrayLess = [];
pointsMap.map((point) => {
  if (point < 50) {
    newArrayLess.push(point)
  }
})

console.log("Points less than 50 (.map) " + newArrayLess); // Output: [ 3, 47 ]


// Filter  ------------------------------------
const pointsFilter = [3, 55, 64, 47];

const sumFilter = pointsFilter.filter((point) => point < 50 )
console.log("Points less than 50 (.filter) " +sumFilter)

// Every --------------------------------------
const pointsEvery = [3, 55, 64, 47];

const arrEvery = pointsEvery.every((point) => point > 1)
console.log("All points are more than 1? (.every) " + arrEvery)

// Some ---------------------------------------
const pointsSome = [3, 55, 64, 47];

const anyPoint = pointsSome.some((point)=> point > 1)
console.log("Any point is more than 1? (.some) " + anyPoint)

// Reduce -------------------------------------

const pointsReduce = [3, 55, 64, 47];

const result = pointsReduce.reduce((sum, num) => sum + num, 0);
console.log("Total sum of points is(.reduce): " + result); // Output: 169