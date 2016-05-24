function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    var result = "";
    if (i % 3 === 0) {
      result += "fizz";
    }
    if (i % 5 === 0) {
      result += "buzz";
    }
    $("body").append((result || i) + "<br>");
  }
}

$(document).load(fizzBuzz());
