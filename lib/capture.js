module.exports = function (str) {
  return (str.match(/x=(\d+)/) || [])[1]; //Array ["x=5", "5"]
}