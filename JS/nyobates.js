// let ereynomer: number[] = [0, 1, 2, 3, 4]
// ereynomer.forEach((kik) => console.log(kik));
var pesanan = [
    { id: 1, customer: "Andi", menu: "Nasi Goreng", qty: 2, price: 20000 },
    { id: 2, customer: "Budi", menu: "Mie Ayam", qty: 1, price: 15000 },
    { id: 3, customer: "Citra", menu: "Es Teh", qty: 3, price: 5000 },
    { id: 4, customer: "Andi", menu: "Es Jeruk", qty: 1, price: 8000 }
];
var tutal = pesanan.map(function (e) { return e.qty * e.price; });
console.log(tutal);
