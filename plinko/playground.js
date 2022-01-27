// playground.js;
import _ from "lodash";
const predictionPoint = 300;
const k = 3;

const outputs = [
  [10, 0.5, 16, 1],
  [200, 0.5, 16, 4],
  [350, 0.5, 16, 4],
  [600, 0.5, 16, 5],
];

const knn = (k, predictionPoint, outputs) => {
  const dist = (point) => {
    return Math.abs(point - predictionPoint);
  };

  const res = outputs
    .map((row) => [dist(row[0]), row[3]])
    .sort((a, b) => a[0] > b[0])
    .slice(0, k); /*?. $ */

  return _.chain(outputs)
    .map((row) => [dist(row[0]), row[3]])
    .sortBy((row) => row[0])
    .slice(0, k)
    .countBy((row) => row[1])
    .toPairs()
    .sortBy((row) => row[1])
    .last()
    .first()
    .parseInt()
    .value();
};

const res = knn(k, predictionPoint, outputs);

console.log(res);
