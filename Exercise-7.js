console.log('Asteriks 1');

for (var rows1 = 1; rows1 <= 5; rows1++) {
  console.log('*');
}

console.log('Asteriks 2');

var x = '';
for ( var i = 1; i <= 5; i++ ) {
  for ( var j = 1; j <= 5; j++ ) {
    x = x + '*';
  }
  x = x + '\n';
}
console.log (x);

console.log('Asteriks 3');

var t = '';
for ( var i = 1; i <= 5; i++ ) {
  for ( var j = 1; j <= i; j++ ) {
    t = t + '*';
  }
  t = t + '\n';
}
console.log (t);
