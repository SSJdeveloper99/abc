let inputLetter = prompt("ismingizni kirit tvar:");
let lowerName = prompt("Bitta harf kirirting");
if (inputLetter.toLowerCase().includes(lowerName.toLowerCase())){
  alert("Ha, sizning ismingizda " + lowerName + " harfi bor.");
} else {
  alert("Yo‘q, sizning ismingizda " + lowerName + " harfi yo‘q.");
}

