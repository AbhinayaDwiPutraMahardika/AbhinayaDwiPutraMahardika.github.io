// Test 3
let siswa = [
  { nama: "Adit", nilai: 80 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 50 },
];

let lulus = [];
let tidakLulus = [];

for (let tung = 0; tung < siswa.length; tung++) {
  if (siswa[tung].nilai >= 75) {
    lulus.push(siswa[tung].nama);
  } else {
    tidakLulus.push(siswa[tung].nama);
  }
}

console.log(`Siswa Lulus: ${lulus.length} Orang`);
for (let ting = 0; ting < lulus.length; ting++) {
  console.log(`- ${lulus[ting]}`);
}

console.log(`Siswa Tidak Lulus: ${tidakLulus.length} Orang`);
for (let ting = 0; ting < tidakLulus.length; ting++) {
  console.log(`- ${tidakLulus[ting]}`);
}
