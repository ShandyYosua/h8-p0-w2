function xo(str) {
  var urutX = 0;
  var urutO = 0;
  for(var k = 0; k < str.length; k++) {
    if(str[k] === 'x') {
      urutX++;
    }
    if(str[k] === 'o') {
      urutO++;
    }
  }
  return urutX === urutO;
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true