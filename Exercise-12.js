function konversiMenit(menit) {
  var jam = menit / 60;
  var sisaMenit = menit % 60;
  var pembulatanJam = Math.floor(jam);
  var nol = '';
  if(sisaMenit < 10){
   nol += '0';
 }
 var hasil = pembulatanJam + ':' + nol + sisaMenit;
 return hasil;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

