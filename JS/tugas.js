// const GajiManager = 10;
// const GajiSupervisor = 70;
// const GajiStaff = 50;

// let gaji = 0;
// let Jabatan = "Supervisor";

// let status = "menikah";

// let kehadiran = 25;

// if (Jabatan === "Manager") {
//   gaji = gaji + GajiManager;
// } else if (Jabatan === "Supervisor") {
//   gaji = gaji + GajiSupervisor;
//   console.log("Supervisor");
// } else {
//   gaji = gaji + GajiStaff;
//   console.log("Staff");
// }

// if ((status = "menikah")) {
//   statuss = true;
// } else {
//   statuss = false;
// }

// if (kehadiran >= 25) {
//   gaji = gaji + 500000;
// }

// if ((statuss = true)) {
//   gaji = gaji * 10;
//   console.log("entuk");
// }

// console.log(gaji);

// let peru = 1;
// while (peru <= 10) {
//   console.log(peru);
//   peru += 1;
// }

// let erey = ["a", "r", "e", "y"];

// for (let fur = 0; fur < erey.length; fur++) {
//   console.log(erey[fur]);
// }

// // for (let bin = 0; bin <= 5; bin++) {
// //   for (bin < 5; bin++;){
// //     console.log("*");
// //   }

// // }

// // let triumph = [
// //   { nama: "Scrambler", CC: 900, warna: "Hitam" },
// //   { nama: "Bonneville", CC: 1200, warna: "Hitam" },
// //   { nama: "Thruxton", CC: 1200, warna: "Hitam" }
// // ];

// // for (let urutan= 0; urutan < triumph.length;urutan++){
// //   console.log("====================");
// //   const motor = triumph[urutan];
// //   console.log(triumph.nama)
// // }

// // let cafe = {
// //   nama: "Moklet Cafe",
// //   businessHours :{
// //     opening: "10.00",
// //     closing: "20.00"
// //   },
// //   menu: ["Kopi","Teh","Kue Cokelat"]
// // }

// // console.log(cafe.nama);
// // console.log("Dari Jam", cafe.businessHours.opening, "Sampai Jam", cafe.businessHours.closing);
// // console.log("-------------------------------");
// // console.log("Menu Rekomendasi :");
// // for (menu = 0; menu < cafe.menu.length; menu++){
// //   console.log(cafe.menu[menu]);
// // }

// let cafe = {
//   name: "Moklet Cafe",
//   menus: [
//     (kopi = {
//       nama: "Kopi",
//       price: 5000,
//       available: false,
//     }),
//     (teh = {
//       nama: "Teh",
//       price: 3000,
//       available: true,
//     }),
//     (kue = {
//       nama: "Kue",
//       price: 7000,
//       available: true,
//     }),
//   ],
// };

// let dipesan = ["Kopi", "teh"];

// console.log(cafe.name);
// console.log("Pesanan Anda :");
// for (pesen = 0; pesen < dipesan.length; pesen++) {
//   console.log(dipesan[pesen] + ": Rp" + cafe.menus[dipesan[pesen]].price);
// }
 
  
// let fungsi = function (let name) {
  
// }

let number1 = 12;
let number2 = 76;
let number3 = 23;

const getAvg = function (a,b,c) {
  return ((a+b+c)/3)
}

console.log("Jadi Average dari ketiga angka tersebut adalah " + getAvg(number1, number2, number3));