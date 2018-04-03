var tahunKabisat = 1998;
if (tahunKabisat % 400) {
  console.log('Ini bukan tahun kabisat');
} else 
    if(tahunKabisat % 100) {
    console.log('Ini bukan tahun kabisat');
} else 
    if(tahunKabisat % 4) {
    consle.log('Ini bukan tahun kabisat');
} else {
  console.log('Ini tahun kabisat');
}