# My Library - The Odin Project

Aplikasi web sederhana untuk mengelola koleksi buku pribadi Anda. Proyek ini merupakan bagian dari kurikulum [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library) pada modul _Organizing Your JavaScript Code_, yang bertujuan untuk melatih pemahaman tentang JavaScript objects, ES6 Classes, dan manipulasi DOM.

## 🌟 Tentang Proyek Ini

Tugas utama dari proyek ini adalah membangun aplikasi perpustakaan kecil di mana pengguna dapat menambahkan buku ke dalam sebuah daftar (array), mengubah status bacaan (sudah dibaca / belum dibaca), dan menghapus buku dari daftar. Seluruh interaksi ini dihubungkan dengan antarmuka pengguna (UI) melalui manipulasi DOM yang dinamis menggunakan Vanilla JavaScript.

## 🚀 Fitur

- **Tambah Buku:** Menambahkan buku baru ke dalam koleksi dengan mengisi judul, penulis, jumlah halaman, dan status membaca (sudah dibaca/belum dibaca).
- **Lihat Koleksi:** Menampilkan semua buku dalam bentuk kartu yang rapi dan responsif.
- **Pencarian Buku:** Mencari buku spesifik di dalam koleksi berdasarkan judul.
- **Ubah Status Baca:** Mengubah status buku dari "Belum dibaca" menjadi "Sudah dibaca" (atau sebaliknya) hanya dengan mencentang _checkbox_.
- **Hapus Buku:** Menghapus buku dari koleksi ketika sudah tidak diperlukan.

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Digunakan untuk membangun struktur halaman web dan elemen _dialog_ (modal).
- **CSS3:** Digunakan untuk styling, layout menggunakan Flexbox dan Grid, serta memberikan tampilan antarmuka yang bersih dan modern.
- **Vanilla JavaScript (ES6+):** Digunakan untuk manipulasi DOM, penanganan _event_, serta mengelola logika utama aplikasi (menggunakan ES6 Classes dan Array).

## 🏁 Cara Memulai

1. _Clone_ atau unduh repositori ini ke perangkat Anda.
2. Buka file `index.html` menggunakan browser pilihan Anda (Google Chrome, Firefox, dll).
3. Mulailah menambahkan buku ke dalam perpustakaan Anda!

## 📖 Panduan Penggunaan

- **Menambah buku:** Klik tombol "Add a book", isi formulir pada _dialog box_ yang muncul, lalu klik "Add Book".
- **Mencari buku:** Ketikkan judul buku pada kolom pencarian dan klik "Find". Aplikasi akan menampilkan detail buku jika ditemukan.
- **Mengubah status baca:** Centang atau hilangkan centang pada kotak kecil (_checkbox_) di kartu buku untuk mengubah status dari "read" ke "unread" atau sebaliknya.
- **Menghapus buku:** Klik tombol "Delete" pada kartu buku yang ingin Anda hapus.

## 📂 Struktur Proyek

- `index.html`: Dokumen utama HTML yang berisi struktur dasar aplikasi.
- `style.css`: File _stylesheet_ yang berisi semua aturan desain dan layout.
- `script.js`: File JavaScript yang berisi logika aplikasi menggunakan ES6 Classes dan _event listeners_.
