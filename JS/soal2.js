const usia = 45;
let jawaban = "";
if (usia <= 5) {
  jawaban = "Balita";
} else if (usia >= 6 && usia <= 12) {
  jawaban = "Anak-Anak";
} else if (usia >= 13 && usia <= 19) {
  jawaban = "Remaja";
} else if (usia >= 20 && usia <= 59) {
  jawaban = "Dewasa";
} else if (usia >= 60) {
  jawaban = "Lansia";
}

console.log("Usia " + usia + " tahun termasuk klasifikasi usia " + jawaban);
