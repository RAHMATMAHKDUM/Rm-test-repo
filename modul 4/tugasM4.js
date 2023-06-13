const namaToko = "Toko Hape";
const namaa = prompt("Masukkan nama anda");
namaBarang = prompt(
  "Pilih Kode Barang:\n001. realme\n002. Samsung\n003. Redmi\n004. Oppo\n005. Xiomi"
);
jumlahBeli = prompt("Masukkan Jumlah Pembelian:\n[Ket: 1-10]");
member = prompt("Apakah Anda member?\n1.yes\n2.no");

let discount = "10%";
namaBarang;
let harga, kodeNama;
if (namaBarang == "001") {
  namaBarang = "realme";
  harga = 1500000;
} else if (namaBarang == "002") {
  namaBarang = "Samsung";
  harga = 10000000;
} else if (namaBarang == "003") {
  namaBarang = "Redmi";
  harga = 8000000;
} else if (namaBarang == "004") {
  namaBarang = "Oppo";
  harga = 7000000;
} else if (namaBarang == "005") {
  namaBarang = "Xiaomi";
  harga = 6000000;
} else {
  namaBarang = "Kode barang tidak terdaftar";
  harga = 0;
}

var totalHarga = harga * jumlahBeli;

if (member == "1") {
  var diskon = totalHarga - totalHarga * 0.1;
} else if (member == "2") {
  diskon = totalHarga;
}

document.write(
  "======================" + namaToko + "==========================" + "<BR>"
);
document.write("Nama : " + namaa + "<br>");
document.write("Nama Barang : " + namaBarang + "<br>");

document.write("Harga Satuan : " + harga + "<br>");
document.write("Jumlah Pembelian : " + jumlahBeli + "<br>");
document.write("Total Harga : " + totalHarga + "<br>");
if (member == "1") {
  document.write("Diskon : Anda mendapatkan diskon 10%" + "<br>");
} else if (member == "2") {
  document.write("Diskon : Anda Tidak Dapat Diskon" + "<br>");
}
{
}
document.write("Total Pembayaran : " + diskon + "<br>");
document.write(
  "======================Terima Kasih=========================" + "<BR>"
);
