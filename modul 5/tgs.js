let kesulitanBelajar = "tidak memahami materi";
let solusi = "";

switch (kesulitanBelajar) {
  case "tidak memahami materi":
    solusi = "Baca buku teks dan catat poin-poin penting";
    break;
  case "terlalu banyak tugas":
    if (jamBelajar < 4) {
      solusi = "Buat jadwal studi yang teratur dan prioritaskan tugas";
    } else {
      solusi = "Mintalah bantuan teman atau dosen untuk mengatasi beban tugas";
    }
    break;
  case "terganggu lingkungan":
    if (lokasiBelajar === "perpustakaan" || lokasiBelajar === "ruang belajar") {
      solusi = "Cari tempat yang tenang untuk belajar";
    } else {
      solusi = "Gunakan headphone atau earplug untuk mengurangi gangguan";
    }
    break;
  default:
    solusi = "Belum ada solusi yang ditentukan";
    break;
}

console.log("Jika mahasiswa mengalami kesulitan belajar:", kesulitanBelajar);
console.log("Solusinya adalah:", solusi);
