# Tropic Coffee Website

Website resmi Tropic Coffee - Kedai kopi dengan inspirasi tropis di Pontianak, Kalimantan Barat.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://placeholder-demo-url.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> **Catatan**: Website ini sepenuhnya dalam Bahasa Indonesia dan dioptimalkan untuk pelanggan lokal di Pontianak.

---

## 📖 Tentang Proyek

Website ini dibuat untuk **Tropic Coffee**, sebuah kedai kopi lokal yang berlokasi di Pontianak, Kalimantan Barat. Website ini menyediakan informasi lengkap tentang menu, lokasi cabang, dan fitur pemesanan interaktif.

- 🌐 **Instagram**: [@tropic.pnk](https://www.instagram.com/tropic.pnk/)
- 📍 **Lokasi**: 4 cabang di Pontianak
- 🎨 **Tema**: Tropis modern dengan nuansa hangat

---

## ✨ Fitur Utama

### 🗺️ **Peta Lokasi Interaktif**
- Menampilkan 4 cabang Tropic Coffee di peta
- GPS koordinat yang akurat untuk setiap lokasi
- Informasi jam operasional real-time (Buka/Tutup)
- Klik marker untuk melihat detail cabang

### 📱 **Menu Digital**
- 3 kategori: Latte Khas, Klasik, Makanan Ringan Tropis
- Pencarian menu dengan filter kategori
- Tag untuk item: terlaris, baru, vegan, musiman
- Informasi harga dan kalori

### 🛒 **Keranjang Belanja**
- Tambah item ke keranjang
- Atur jumlah pesanan
- Pilih cabang untuk pengambilan
- Kalkulasi subtotal, pajak, dan total otomatis

### 📍 **Manajemen Cabang**
- Pilih "cabang lokal" untuk pengalaman yang dipersonalisasi
- Penyimpanan preferensi cabang di browser
- Info jam operasional dan suasana (#hashtags)
- Alamat lengkap dengan koordinat GPS

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun dengan teknologi modern:

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **State Management**: React Query + Context API
- **Maps**: Leaflet + React Leaflet
- **Animation**: Framer Motion
- **Routing**: React Router v6
- **Form**: React Hook Form + Zod
- **Icons**: Lucide React

---

## 📁 Struktur Proyek

```
tropic-bloom-frontend/
├── public/                 # File statis
├── src/
│   ├── assets/            # Gambar dan media
│   ├── components/ui/     # Komponen UI shadcn
│   ├── features/          # Fitur aplikasi (arsitektur berbasis fitur)
│   │   ├── branches/      # Fitur cabang & lokasi
│   │   │   ├── components/
│   │   │   ├── context/
│   │   │   ├── data/      # branches.json
│   │   │   ├── queries/
│   │   │   └── types/
│   │   ├── cart/          # Fitur keranjang belanja
│   │   ├── common/        # Komponen bersama (Hero, Navbar, Footer)
│   │   └── menu/          # Fitur menu
│   │       ├── components/
│   │       ├── data/      # menu.json
│   │       ├── queries/
│   │       └── types/
│   ├── pages/             # Halaman utama
│   ├── shared/            # Utilities bersama
│   └── main.tsx           # Entry point
├── index.html
└── package.json
```

---

## 📍 Lokasi Cabang

Tropic Coffee memiliki **4 cabang** di Pontianak:

| Nama Cabang | Alamat | Jam Operasional | Google Maps |
|-------------|--------|-----------------|-------------|
| **Tropic di Merdeka** | Jl. Hos Cokroaminoto No.326, Darat Sekip | 07:00 - 22:00 | [Lihat Peta](https://maps.app.goo.gl/Kg49k76zb5qAhk4C7) |
| **Tropic di Taslim** | Jl. Taslim No.1, Tengah | 07:00 - 21:00 | [Lihat Peta](https://maps.app.goo.gl/5tJdUKHRw7C2smW49) |
| **Tropic di Suprapto** | Jl. Aris Margono No.11, Benua Melayu Darat | 07:00 - 22:00 | [Lihat Peta](https://maps.app.goo.gl/j4cRYruhfZf6YnAK6) |
| **Tropic di Kobar** | Jl. Prof. M.Yamin, Kota Baru | 07:30 - 21:30 | [Lihat Peta](https://maps.app.goo.gl/1Y5koC9ZatCmSPpE6) |

**Koordinat GPS:**
- Merdeka: `-0.0289948, 109.3342987`
- Taslim: `-0.0227324, 109.33452`
- Suprapto: `-0.0424607, 109.3416693`
- Kobar: `-0.061497, 109.3058585`

---

## 🚀 Memulai Proyek

### Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** versi 18 atau lebih tinggi
- **npm** atau **yarn**

### Instalasi

1. **Clone repository**
   ```bash
   git clone <URL_REPOSITORY>
   cd tropic-bloom-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```
   
   Website akan berjalan di `http://localhost:5173`

### Perintah Tersedia

```bash
# Development server dengan hot-reload
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview

# Linting
npm run lint

# Testing
npm run test

# Testing dengan watch mode
npm run test:watch
```

---

## ⚙️ Konfigurasi

### Mengubah Data Cabang

Edit file `src/features/branches/data/branches.json`:

```json
{
  "id": "nama-cabang",
  "name": "Tropic di Nama Cabang",
  "address": "Alamat lengkap cabang",
  "hours": { "open": "07:00", "close": "22:00" },
  "vibes": ["#HashtagSuasana", "#HashtagLain"],
  "image": "/branches/gambar.jpg",
  "coordinates": { "lat": -0.0000, "lng": 109.0000 }
}
```

**Cara mendapatkan koordinat GPS:**
1. Buka Google Maps
2. Klik kanan pada lokasi
3. Pilih koordinat untuk menyalin (format: lat, lng)

### Mengubah Menu

Edit file `src/features/menu/data/menu.json`:

```json
{
  "categories": [
    {
      "id": "kategori-id",
      "name": "Nama Kategori",
      "description": "Deskripsi kategori",
      "items": [
        {
          "id": "item-id",
          "name": "Nama Item (English OK)",
          "description": "Deskripsi dalam Bahasa Indonesia",
          "price": 5.50,
          "tags": ["terlaris", "baru", "vegan"],
          "calories": 120
        }
      ]
    }
  ]
}
```

**Tag yang tersedia:**
- `terlaris` - Item paling laku
- `baru` - Item baru
- `vegan` - Item vegan
- `musiman` - Item musiman
- `dingin` - Minuman dingin
- `segar` - Item segar
- `sehat` - Item sehat

---

## 🎨 Kustomisasi

### Mengubah Tema Warna

Edit file `tailwind.config.ts` untuk mengubah palet warna:

```typescript
colors: {
  primary: "...",        // Warna utama (hijau tua)
  accent: "...",         // Warna aksen (oranye tropis)
  "tropical-orange": "..." // Warna khas tropis
}
```

### Menambah Cabang Baru

1. Buka `src/features/branches/data/branches.json`
2. Tambahkan objek cabang baru dengan format yang sama
3. Pastikan `id` unik
4. Tambahkan koordinat GPS yang akurat
5. Simpan file - perubahan akan terlihat otomatis

### Mengubah Jam Operasional

Format jam: `"HH:MM"` (24 jam)

```json
"hours": { 
  "open": "07:00",   // Jam buka
  "close": "22:00"   // Jam tutup
}
```

---

## 📦 Build & Deployment

### Build untuk Production

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

### Deploy ke Hosting

Website ini dapat di-deploy ke berbagai platform:

#### **Vercel** (Rekomendasi)
```bash
npm i -g vercel
vercel
```

#### **Netlify**
```bash
npm i -g netlify-cli
netlify deploy
```

#### **Manual Deployment**
1. Jalankan `npm run build`
2. Upload isi folder `dist/` ke web hosting Anda
3. Pastikan server dikonfigurasi untuk Single Page Application (SPA)

---

## 📸 Screenshot

> _Screenshot akan ditambahkan di sini_

### Halaman Utama
![Hero Section](#)

### Menu Digital
![Menu Section](#)

### Peta Cabang
![Branch Map](#)

### Keranjang Belanja
![Shopping Cart](#)

---

## 🌐 Catatan Bahasa

Website ini sepenuhnya dalam **Bahasa Indonesia**:
- ✅ Semua teks UI dalam Bahasa Indonesia
- ✅ Nama menu item: English (standar kopi)
- ✅ Deskripsi menu: Bahasa Indonesia
- ✅ Pesan error: Bahasa Indonesia
- ✅ HTML lang: `id` (Indonesian)

---

## 🐛 Troubleshooting

### Build Gagal
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Peta Tidak Muncul
- Pastikan Leaflet CSS ter-import dengan benar
- Periksa koordinat GPS (format: lat, lng)
- Cek console browser untuk error

### Menu Tidak Muncul
- Validasi format JSON di `menu.json`
- Pastikan tidak ada karakter spesial yang tidak di-escape
- Cek console untuk error parsing

---

## 👨‍💻 Developer

**Ihza Mahendra**

Jika ada pertanyaan atau membutuhkan bantuan teknis, silakan hubungi developer.

---

## 📄 Lisensi

© 2026 Tropic Coffee. All rights reserved.

Proyek ini dibuat khusus untuk Tropic Coffee Pontianak.

---

## 🙏 Acknowledgments

- **Tropic Coffee Team** - Untuk kepercayaan dan kolaborasi
- **shadcn/ui** - Komponen UI yang indah
- **Leaflet** - Library peta open-source
- **React Community** - Ekosistem yang luar biasa

---

**Made with ☕ for Tropic Coffee Pontianak**

Instagram: [@tropic.pnk](https://www.instagram.com/tropic.pnk/)
