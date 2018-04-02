function balikKata(kata) {
  var tampungKata = '';
  for(var huruf = kata.length-1; huruf >=0; huruf--) {
    tampungKata += kata[huruf];
  }return tampungKata;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));