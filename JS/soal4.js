maxEven(11, 18, 24, 7, 30, 5);

function maxEven(...angka) {
  let genap = angka.filter((n) => n % 2 === 0);
  let terbesar = Math.max(...genap);
  console.log(`Nilai genap terbesar: ${terbesar}`);
}
