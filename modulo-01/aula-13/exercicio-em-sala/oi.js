function makeAdder(x) {
if (x == 'euro')

  console.log("a função foi chamada", x);
  return function (y) {
    console.log("a closure foi chamada", y);
    return x + y;
  };
}

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

const real = makeAdder('real')
const euro = makeAdder('euro')

euro(100)


console.log();
