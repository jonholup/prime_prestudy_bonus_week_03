var num = parseInt(prompt("Pick a number"));

var add = function(n) {
  return n + 2;
}
var multiply = function(n) {
  return n * 3;
}
var subtract = function(n) {
  return n - 4;
}

if (isNaN(num)) {
  alert("Not a number");
} else {
  alert(add(multiply(subtract(num))));
}
