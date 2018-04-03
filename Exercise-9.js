console.log('Tugas 1');

function shoutOut() {
  return 'Halo Function!';
}
console.log(shoutOut());

console.log('Tugas 2');

function calculateMultiply(num1, num2)
{
  var nilai = num1 * num2;
  return nilai;
}
console.log(calculateMultiply(5, 6));

console.log('Tugas 3');

var Name = 'Agus';
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(Name, age, address, hobby) {
  var gabungKalimat = 'Nama saya ' + Name + ',' + 'umur saya ' + age + ' tahun' + ',' + ' alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby;
  return gabungKalimat;
}
var fullSentence = processSentence(Name,age,address,hobby);
console.log(fullSentence);
