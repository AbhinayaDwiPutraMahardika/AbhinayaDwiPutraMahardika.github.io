let data = [5, -3, 7, -1, 0, 6, -8];
let positif = 0;
let negatif = 0;
let nol = 0;
for (let itung = 0; itung <= data.length; itung++) {
  let husal = data[itung];
  if (husal > 0) {
    positif++;
  } else if (husal < 0) {
    negatif++;
  } else if (husal == 0) {
    nol++;
  }
}

console.log("Positif = " + positif);
console.log("Negatif = " + negatif);
console.log("Nol : " + nol);
