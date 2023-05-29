// Tangkap elemen-elemen yang terkait dengan sistem cek barang
const barangInput = document.getElementById("barangInput");
const cekButton = document.getElementById("cekButton");
const hasilOutput = document.getElementById("hasilOutput");
const tambahBarangButton = document.getElementById("tambahBarangButton");

// Daftar barang yang tersedia
const daftarBarang = ["Buku", "Pensil", "Bolpoin", "Penggaris", "Penghapus"];

// Fungsi untuk mengecek ketersediaan barang
function cekKetersediaan() {
  const namaBarang = barangInput.value.trim();
  let hasil = "";

  if (namaBarang) {
    if (daftarBarang.includes(namaBarang)) {
      hasil = `Barang "${namaBarang}" tersedia.`;
    } else {
      hasil = `Barang "${namaBarang}" tidak tersedia.`;
      tambahBarangButton.style.display = "inline"; // Tampilkan tombol "Tambah Barang"
    }
  } else {
    hasil = "Mohon masukkan nama barang.";
  }

  hasilOutput.textContent = hasil;
}

// Fungsi untuk menambahkan barang ke daftar
function tambahBarang() {
  const namaBarang = barangInput.value.trim();

  if (namaBarang && !daftarBarang.includes(namaBarang)) {
    daftarBarang.push(namaBarang);
    tambahBarangButton.style.display = "none"; // Sembunyikan tombol "Tambah Barang"
    hasilOutput.textContent = `Barang "${namaBarang}" ditambahkan ke daftar.`;
  }
}

// Tambahkan event listener pada tombol "Cek"
cekButton.addEventListener("click", cekKetersediaan);

// Tambahkan event listener pada input teks "barangInput" untuk mendengarkan tombol "Enter"
barangInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Mencegah pengiriman form jika ada
    cekKetersediaan();
  }
});

// Tambahkan event listener pada tombol "Tambah Barang"
tambahBarangButton.addEventListener("click", tambahBarang);
