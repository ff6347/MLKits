const outputs = [];
const predictionPoint = 300;
const k = 3;

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  const datum = [dropPosition, bounciness, size, bucketLabel];
  outputs.push(datum);
  console.log(outputs);
}

const dist = point => {
  return Math.abs(point - predictionPoint);
};
function runAnalysis() {
  // const res = outputs
  //   .map(row => [dist(row[0]), row[3]])
  //   .sort((a, b) => a[0] > b[0])
  //   .slice(0, k); /*?. $ */

  const bucket = _.chain(outputs)
    .map(row => [dist(row[0]), row[3]])
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value();
  // _.chain(outputs)
  // .map((row) => dist(row[0]), row[2]).value()
  // };
  console.log("bucket", bucket);
}
