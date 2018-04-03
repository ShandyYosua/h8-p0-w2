console.log('Exercise 6.1');

console.log('LOOPING PERTAMA');

var deretKecilBesar = 2;
while(deretKecilBesar <= 20)
{
  console.log(deretKecilBesar + ' - I love coding');
  deretKecilBesar = deretKecilBesar + 2;
}

console.log('LOOPING KEDUA');

var deretBesarKecil = 20;
while(deretBesarKecil >= 2)
{
  console.log(deretBesarKecil + ' - I will become fullstack developer');
  deretBesarKecil = deretBesarKecil - 2;
}


console.log('Exercise 6.2');

console.log('LOOPING PERTAMA');

for(deretKecilBesar = 1; deretKecilBesar <=20; deretKecilBesar++) {
  console.log(deretKecilBesar + ' I love coding');
}

console.log('LOOPING KEDUA');

for(deretBesarKecil = 20; deretBesarKecil >=1; deretBesarKecil--) {
  console.log(deretBesarKecil + ' I will become fullstack developer');
}


console.log('Exercise 6.3');

console.log('Perulangan 1');

for(deretAngka = 1; deretAngka <=100; deretAngka++) {
  if(deretAngka % 2 === 0) {
    console.log(deretAngka + ' GENAP');
  }else {
    console.log(deretAngka + ' GANJIL');
  }
}

console.log('Perulangan 2');

var counterDua = 1;
for(counterDua = 1; counterDua <= 100; counterDua+=2) {
  console.log(counterDua + ' Kelipatan ' + counterDua);
}

console.log('Perulangan 3');

var counterLima = 1;
for(counterLima = 1; counterLima <= 100; counterLima+=5) {
  console.log(counterLima + ' Kelipatan ' + counterLima);
}

console.log('Perulangan 4');

var counterSembilan = 1;
for(counterSembilan = 1; counterSembilan <= 100; counterSembilan+=9) {
  console.log(counterSembilan + ' Kelipatan ' + counterSembilan);
}

