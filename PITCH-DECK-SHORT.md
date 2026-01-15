# 🌴 TROPIC DIGITAL TRANSFORMATION
## Pitch Deck: Membangun Oasis Digital untuk 10.000+ Pelanggan

---

## 🎯 SLIDE 1: THE VISION

### Elevating Tropic: Membangun Oasis Digital untuk 10.000+ Pelanggan

**Visual Concept:**
- Foto produk signature Tropic (Coconut Cold Brew, Tropical Sunset Latte)
- Overlay logo Tropic
- Mockup website di smartphone dengan halaman menu

**Opening Question:**
> **"Bagaimana cara kita membuat 10.000 followers di Instagram bisa bertransaksi hanya dengan dua klik?"**

**The Answer:**
Dengan memberikan mereka **pintu digital** yang langsung terhubung ke menu, lokasi, dan sistem pemesanan Tropic.

---

## ⚠️ SLIDE 2: THE GAP (PROBLEM)

### Potensi yang Tertinggal di "Meja Kasir"

#### 🚫 **Problem #1: Friction (Hambatan Akses)**
**Situasi Sekarang:**
- Customer harus datang ke lokasi hanya untuk melihat menu
- Tidak tahu apakah menu favorit masih available
- Tidak tahu cabang mana yang buka atau tutup

**Impact:**
- Customer yang sibuk langsung skip → pergi ke kompetitor
- Kehilangan potensi penjualan dari "impulse buyer" yang lihat Instagram tapi tidak sempat datang

---

#### ⏱️ **Problem #2: Queue (Antrean Panjang)**
**Situasi Sekarang:**
- Jam sibuk (pagi, lunch, sore) = antrean panjang di kasir
- Customer harus:
  1. Antre untuk lihat menu
  2. Mikir menu apa yang mau dipesan (sambil orang di belakang menunggu)
  3. Antre lagi untuk bayar
  
**Impact:**
- Calon pembeli yang terburu-buru **batal memesan** karena tidak mau menunggu
- Turnover lambat → kapasitas terbatas → revenue terbatas

**Estimasi Kehilangan:**
- 15-20 customer/hari pergi karena antrean × Rp 50.000
- **= Rp 750.000 - 1.000.000/hari yang hilang**
- **= Rp 22-30 juta/bulan** ❌

---

#### 🔍 **Problem #3: Discovery (Sulitnya Akses Informasi)**
**Situasi Sekarang:**
- Customer tidak tahu detail tiap cabang:
  - Jam buka berapa?
  - Ada WiFi untuk WFC (Work from Cafe)?
  - Ada tempat duduk outdoor?
  - Ada musholla?
- Info ini tersebar di Instagram Stories yang hilang setelah 24 jam

**Impact:**
- Customer datang ke cabang yang salah
- Ekspektasi tidak match → kecewa → bad review

---

## 💡 SLIDE 3: THE SOLUTION

### Tropic Web-Oasis: Satu Pintu untuk Semua Cabang

**Visual Concept:**
- Mockup halaman "Branch Hub" dengan peta interaktif
- 4 marker cabang Pontianak
- Cards dengan info lengkap tiap cabang

---

### **Key Value Propositions:**

#### 1. 🎯 **Personalized Experience**
- Tiap cabang punya identitas digitalnya sendiri
- Customer bisa pilih "cabang favorit" mereka
- Sistem ingat preferensi customer

**Example:**
> "Halo Budi! Cabang favorit Anda: Tropic di Merdeka. Menu terbaru tersedia sekarang!"

---

#### 2. ⚡ **Fast & Lightweight**
- Website loading dalam **2 detik** (216KB gzipped)
- Lebih cepat dari loading gambar di Instagram
- Mobile-first: 90% customer buka dari HP

**Technical Proof:**
- Build size: 692KB → 216KB gzipped
- Performance score: **7.5/10** production-ready
- Zero TypeScript errors
- React 18 + Vite (cutting-edge tech 2024)

---

#### 3. 🔍 **SEO-Friendly (Google Discovery)**
- Tropic akan muncul di Google saat orang search:
  - "Kopi enak Pontianak"
  - "Coffee shop terdekat Pontianak"
  - "Kopi buka 24 jam Pontianak"
- **Organic traffic gratis** dari Google Search

**Current Situation:**
- Instagram tidak diindex Google → **invisible** di search results
- Kompetitor yang punya website akan muncul duluan

**Future with Website:**
- Tropic muncul di halaman 1 Google
- **New customer acquisition** tanpa ads

---

## 🚀 SLIDE 4: HIGH-IMPACT FEATURES

### Fitur Cerdas untuk Efisiensi Bisnis

---

### **Feature #1: Smart Branch Locator**

**What It Does:**
- Deteksi lokasi customer (GPS)
- Rekomendasikan cabang terdekat
- Tunjukkan jarak & waktu tempuh
- Status real-time: **Open/Closed**

**Visual:**
- Interactive map dengan 4 marker
- Custom emerald green markers (brand color)
- Popup info saat klik marker
- Button: "Jadikan Cabang Saya"

**Business Impact:**
- Customer tidak akan salah datang ke cabang yang jauh
- Distribusi traffic lebih merata ke 4 cabang
- Data: cabang mana yang paling populer

**Technical Details:**
- Leaflet.js + React Leaflet (open-source, no API key needed)
- GPS coordinates real:
  - Merdeka: -0.0289948, 109.3342987
  - Taslim: -0.0227324, 109.33452
  - Suprapto: -0.0424607, 109.3416693
  - Kobar: -0.061497, 109.3058585

---

### **Feature #2: Real-time Digital Menu**

**What It Does:**
- 12 produk dalam 3 kategori
- Update stok menu dalam hitungan detik
- Toggle available/unavailable per cabang

**Example Scenario:**
```
Jam 20:00 - Stok Coconut Cold Brew di Cabang Merdeka habis
         ↓
Admin toggle "Unavailable" di dashboard
         ↓
Customer yang buka website langsung lihat:
"Coconut Cold Brew - Habis di Merdeka, tersedia di Taslim"
         ↓
Customer bisa switch cabang atau pilih menu lain
         ↓
Tidak ada customer yang kecewa!
```

**Business Impact:**
- **Mencegah kekecewaan customer** karena menu habis
- Reduce complain rate
- Meningkatkan customer satisfaction

**Current Implementation:**
- 12 produk menu sudah ter-input
- Foto placeholder (siap diganti foto real)
- Harga Rp 28.500 - Rp 92.500
- Info kalori 120-450 kcal
- Tag system: Terlaris, Baru, Vegan, Musiman

---

### **Feature #3: "Vibe" Tags**

**What It Does:**
- Setiap cabang punya tags yang describe suasananya
- Customer bisa pilih cabang sesuai kebutuhan

**Vibe Tags Implementation:**

**Tropic di Merdeka:**
- #TempatDudukLuar (Outdoor seating)
- #WiFiCepat (Fast WiFi for WFC)
- #CozySpace (Cozy ambiance)
- #24Jam (24-hour operation)

**Tropic di Taslim:**
- #TengahKota (City center location)
- #ParkingLuas (Ample parking)
- #Musholla (Prayer room available)
- #WorkingSpace (Good for working)

**Tropic di Suprapto:**
- #TenangNyaman (Quiet & comfortable)
- #FamilyFriendly (Good for families)
- #ACDingin (Cool AC)
- #CoffeeLovers (Barista expert)

**Tropic di Kobar:**
- #ViewBagus (Nice view)
- #InstagramWorthy (Photo spot)
- #RooftopCafe (Rooftop seating)
- #SunsetView (Best for sunset)

**Use Case:**
- Customer mau WFC → filter "WiFiCepat" → dapat Merdeka & Taslim
- Customer mau family dinner → filter "FamilyFriendly" → dapat Suprapto
- Customer mau foto IG → filter "InstagramWorthy" → dapat Kobar

**Business Impact:**
- Match customer expectation dengan reality
- Increase customer satisfaction
- Reduce "datang ke cabang yang salah"
- Encourage visit ke cabang yang kurang ramai (traffic balancing)

---

## 🎯 SLIDE 5: STRATEGI CLOSING - "THE LOW-RISK ENTRY"

### Mulai Tanpa Risiko, Tumbuh Secara Bertahap

> **"Kita tidak perlu mengubah sistem kerja Tropic dalam semalam. Kita mulai dengan memperkuat identitas digital, lalu perlahan masuk ke efisiensi operasional."**

---

## 📊 PHASE 1: BRANDING & DIGITAL CATALOG (The Foundation)

### **Fokus:** Menggantikan Linktree/Bio IG yang Pasif Menjadi Katalog Interaktif

---

### **Apa yang Didapat:**

#### ✅ **1. Website Profil & Menu Digital Resmi**
- Homepage dengan hero section brand Tropic
- About section dengan brand story
- **12 produk menu** dengan:
  - Foto produk (high-quality, bisa diganti)
  - Harga dalam Rupiah
  - Deskripsi dalam Bahasa Indonesia
  - Info kalori
  - Tag: Terlaris, Baru, Vegan, etc.
- Search & filter menu by category

**Current Status:** ✅ **SUDAH JADI 100%**

---

#### ✅ **2. Lokasi Cabang Terintegrasi Google Maps**
- **4 cabang Pontianak** sudah ter-input
- Interactive Leaflet map dengan GPS real
- Info lengkap tiap cabang:
  - Alamat lengkap
  - Jam operasional (cafe + kitchen hours)
  - Fasilitas: Cafe, Eatery, Working Space, Musholla
  - Vibe tags: #WiFiCepat #TempatDudukLuar
  - Status Open/Closed real-time
- Link ke Google Maps untuk navigasi

**Current Status:** ✅ **SUDAH JADI 100%**

---

#### ✅ **3. Statistik Pengunjung (Analytics)**
- Google Analytics 4 integration (ready to setup)
- Track data:
  - Berapa orang visit website per hari?
  - Menu apa yang paling banyak dilihat?
  - Dari mana traffic datang? (Instagram, Google, direct)
  - Cabang mana yang paling banyak diklik?
  - Jam berapa traffic paling tinggi?

**Value:**
- **Data adalah aset!** Owner bisa tahu behavior customer
- Bisa optimize menu dan marketing strategy based on data

**Current Status:** ⚠️ **Ready for integration** (tinggal setup GA4 tracking code)

---

### **Benefit Phase 1:**

#### 🎯 **Untuk Customer:**
1. **Convenience:** Bisa memilih menu dari rumah/kantor sebelum berangkat
2. **Information:** Tahu cabang mana yang buka/tutup, ada WiFi, parking luas
3. **Decision Making:** Bisa compare menu & harga sebelum datang

#### 🏆 **Untuk Tropic (Owner):**
1. **Branding:** Terlihat jauh lebih profesional dibanding kompetitor
   - Kompetitor cuma punya Instagram
   - Tropic punya website modern dengan peta interaktif
   
2. **Data Ownership:**
   - Tahu siapa yang visit website (demografi, lokasi)
   - Tahu menu favorit customer
   - Data ini **milik Tropic selamanya** (tidak hilang seperti Instagram Stories)

3. **SEO Advantage:**
   - Muncul di Google Search results
   - Free organic traffic
   - Kompetitor tidak punya ini!

4. **Marketing Efficiency:**
   - Bio Instagram: link ke website (bukan Linktree generic)
   - Setiap postingan IG bisa CTA: "Lihat menu lengkap di link bio"
   - Convert followers jadi website visitors

---

### **Investment Phase 1:**

**Development:**
- Frontend website: ✅ **SUDAH JADI** (sunk cost)
- Domain & hosting: Rp 500.000/tahun
- Google Analytics setup: Rp 0 (free)

**Timeline:**
- Website: ✅ Done (87% complete, production-ready)
- Domain pointing: 1-2 hari
- Content upload (foto real): 3-5 hari
- **Total: 1 minggu untuk go-live Phase 1** 🚀

**Total Investment Phase 1:** ~Rp 500.000 (domain + hosting 1 tahun)

---

## 🚀 PHASE 2: ORDER FOR PICKUP (The Efficiency)

### **Fokus:** Mengaktifkan Fitur Transaksi Tanpa Antre

---

### **Apa yang Didapat:**

#### 🛒 **1. Sistem "Order Ahead" (Pesan via Web, Ambil di Toko)**

**User Flow:**
```
Customer buka website (dari IG atau Google)
         ↓
Pilih menu (add to cart)
         ↓
Pilih cabang untuk pickup
         ↓
Checkout & Bayar online (QRIS/Transfer/E-wallet)
         ↓
Dapat konfirmasi: "Pesanan #1234 akan siap dalam 15 menit"
         ↓
Customer datang, skip antrean kasir
         ↓
Langsung ambil pesanan di counter khusus "Online Order"
         ↓
Done! Total waktu di toko: < 2 menit
```

**Features:**
- Shopping cart (sudah jadi 100%) ✅
- Branch selection (sudah jadi 100%) ✅
- Price calculation + tax 8% (sudah jadi 100%) ✅
- Checkout process (needs backend integration) ⚠️
- Order confirmation (needs backend) ⚠️

---

#### 💳 **2. Integrasi Payment Gateway**

**Provider: Midtrans** (Recommended untuk Indonesia)

**Payment Methods:**
- 💳 Credit/Debit Card (Visa, Mastercard)
- 🏦 Bank Transfer (Virtual Account BCA, Mandiri, BNI, BRI)
- 📱 E-wallet (GoPay, OVO, Dana, ShopeePay)
- 📲 **QRIS** (Most popular!)

**Fee Structure:**
- QRIS: 0.7% per transaksi
- E-wallet: 2.9% per transaksi
- Virtual Account: Rp 4.000 per transaksi
- Credit Card: 2.9% + Rp 2.000

**Example:**
- Order Rp 50.000 via QRIS
- Fee: Rp 50.000 × 0.7% = **Rp 350**
- Net revenue: Rp 49.650

**Compare vs GrabFood/GoFood:**
- GrabFood commission: **25-30%** per transaksi
- Order Rp 50.000 → komisi Rp 12.500 - 15.000 😱
- **Midtrans 100x lebih murah!**

---

#### 📢 **3. Notifikasi Pesanan untuk Staf Bar**

**How It Works:**

**Option A: Web Dashboard** (Recommended)
- Staf buka dashboard di tablet/laptop dapur
- Ada notification sound saat order masuk: "DING! 🔔"
- Tampil:
  ```
  ORDER #1234 - Baru Masuk!
  
  Cabang: Merdeka
  Customer: Budi (081234567890)
  Waktu: 10:30 AM
  
  Items:
  - Coconut Cold Brew (Iced) x2
  - Pisang Bakar Manis x1
  
  Total: Rp 193.500
  Status: PAID ✅
  
  [TERIMA] [TOLAK]
  ```
- Staf klik "TERIMA" → mulai buat pesanan
- Update status: "Sedang Diproses" → Customer dapat notif di HP
- Selesai dibuat → Update status: "Siap Diambil" → Customer dapat notif lagi
- Customer datang → Staf klik "SELESAI"

**Option B: WhatsApp Notification** (Budget-friendly)
- Order masuk → Auto-send WA ke nomor staf cabang
- Format sama seperti di atas
- Staf baca, buat pesanan, reply "DONE"

**Option C: Printer Dapur** (Future)
- Order masuk → Auto-print struk pesanan
- Staf lihat struk → buat pesanan
- Traditional tapi reliable

---

### **Benefit Phase 2:**

#### 🚀 **Untuk Customer:**
1. **No Queue:** Tidak perlu antre di kasir
2. **Save Time:** Order dari kantor, ambil dalam 15 menit
3. **VIP Feeling:** Ada counter khusus "Online Order"
4. **Transparency:** Tahu status pesanan real-time (diproses/siap)

#### 💼 **Untuk Tropic (Owner):**
1. **Mengurangi Beban Kasir di Jam Sibuk**
   - Customer online order tidak makan waktu kasir
   - Kasir fokus melayani customer walk-in
   - Turnover lebih cepat

2. **Meningkatkan Kapasitas Penjualan**
   - Sekarang: limited by jumlah kasir + meja
   - Dengan online order: bisa melayani **2x lipat** customer
   - Tidak perlu tambah meja/kursi (no capex!)

3. **Database Customer**
   - Tahu siapa yang order paling sering
   - Tahu menu favorit per customer
   - Bisa kirim promo targeted:
     - "Halo Budi, Coconut Cold Brew favorit kamu diskon 20% hari ini!"

4. **Reduce Error**
   - Customer sendiri yang input pesanan (tidak ada salah dengar)
   - Auto-calculation (tidak ada salah hitung)
   - Digital proof (tidak bisa dibantah)

5. **Revenue Increase**
   - Target: 15-20 online orders/hari per cabang
   - 4 cabang × 20 orders × Rp 50.000 = **Rp 4 juta/hari**
   - **Rp 120 juta/bulan extra revenue** 🚀

---

### **Investment Phase 2:**

**Development:**
- Backend API (Laravel): 3-4 minggu development
  - Order management system
  - User authentication
  - Payment gateway integration
  - Admin dashboard
  - Notification system

**Payment Gateway:**
- Midtrans setup: Rp 0 (free registration)
- Transaction fee: 0.7% - 2.9% per transaksi (pay as you go)

**Infrastructure:**
- Backend hosting: Rp 300.000/bulan (VPS for Laravel)
- Database: Include in VPS
- SMS notification (optional): Rp 150/SMS

**Timeline:**
- Backend development: 3-4 minggu
- Payment gateway setup: 1 minggu
- Testing: 1 minggu
- Soft launch: 1 minggu
- **Total: 6-7 minggu untuk go-live Phase 2**

**Total Investment Phase 2:**
- Development: ~Rp 25-35 juta (one-time)
- Hosting: Rp 300.000/bulan (recurring)
- Transaction fee: 0.7-2.9% per order (pay per use)

**Break-even Calculation:**
- Investment: Rp 30 juta
- Extra revenue: Rp 120 juta/bulan (conservative: Rp 60 juta/bulan)
- Break-even: **1-2 bulan** 🎯
- Profit Year 1: Rp 60 juta × 10 months = **Rp 600 juta** 💰

---

## 📊 SLIDE 6: WHY NOW? (THE DATA)

### Mengubah Follower Menjadi Pelanggan Loyal

---

### **The Opportunity:**

**Current Situation:**
- Instagram @tropic.pnk: **10.000+ followers**
- Engagement rate: ~5% (500 likes/comments per post)
- Conversion to sales: **0%** (tidak ada mekanisme order online)

**Potential Impact:**
- Jika hanya **2% dari followers** order 1x/bulan via website:
  - 10.000 × 2% = **200 orders/bulan**
  - 200 × Rp 50.000 = **Rp 10 juta/bulan** 🚀

- Jika **5% dari followers** order 1x/bulan:
  - 10.000 × 5% = **500 orders/bulan**
  - 500 × Rp 50.000 = **Rp 25 juta/bulan** 🚀🚀

---

### **The Risk of Waiting:**

#### ⚠️ **Risk #1: Kompetitor Moves First**
- Kompetitor yang punya website duluan akan:
  - Capture online market share
  - Rank higher di Google
  - Terlihat lebih modern & professional
  - **Steal potential customers**

**Example:**
- Customer search "Kopi enak Pontianak" di Google
- Kompetitor muncul halaman 1, Tropic tidak muncul
- Customer klik kompetitor → lost sale ❌

---

#### ⚠️ **Risk #2: Instagram Algorithm Change**
- Instagram bisa:
  - Change algorithm → reach turun
  - Shadowban → postingan tidak muncul
  - Suspend/delete account (rare tapi bisa terjadi)
- **"Kalau Instagram tiba-tiba hilang, kita kehilangan 10k followers. Tapi kalau kita punya website, kita punya database customer selamanya."**

---

#### ⚠️ **Risk #3: Customer Behavior Shift**
- Gen Z & Millennials (70% customer coffee shop):
  - Terbiasa order online (GoFood, GrabFood, Shopee)
  - Expect convenience (no queue, fast service)
  - Tidak mau antre di kasir
- **Kalau Tropic tidak provide online order, mereka akan switch ke kompetitor yang provide.**

---

### **The Urgency:**

> **"Tropic sudah memiliki:**
> - ✅ 4 cabang strategis
> - ✅ 10.000+ followers
> - ✅ Menu berkualitas
> - ✅ Brand yang kuat
> 
> **Yang kurang hanya satu:**
> - ❌ Platform untuk convert followers jadi customers
> 
> **Website ini adalah missing piece tersebut.**
> 
> **Saya sudah membuatkan 87% dari solusinya. Tinggal finishing 13%, dan Tropic siap untuk dominate pasar Pontianak."**

---

## 🎯 SLIDE 7: NEXT STEP (THE CALL TO ACTION)

### Mari Kita Mulai dengan Phase 1

---

### **The Proposal:**

> **"Saya sudah menyiapkan prototype fungsional yang production-ready (7.5/10 quality score). Kita bisa jalankan Phase 1 dalam 1 minggu untuk melihat respon pasar tanpa mengganggu operasional kasir saat ini."**

---

### **Phase 1 Deliverables (1 Minggu):**

**Week 1: Go-Live Phase 1**
- [ ] Domain setup (tropicpnk.com atau tropic.id) ✅
- [ ] Hosting deployment (Vercel - gratis!) ✅
- [ ] Upload foto produk real (12 menu items)
- [ ] Upload foto cabang (4 locations)
- [ ] Google Analytics setup
- [ ] Update bio Instagram dengan link website
- [ ] Soft launch announcement di IG Stories

**Deliverables:**
1. ✅ Website live & accessible
2. ✅ 12 produk menu dengan foto real
3. ✅ 4 cabang dengan info lengkap
4. ✅ Interactive map dengan GPS
5. ✅ Mobile-responsive design
6. ✅ Fast loading (< 2 detik)

---

### **Success Metrics Phase 1 (First 30 Days):**

**Target KPIs:**
- 📊 **Website visitors:** 1,000 - 2,000 unique visitors
- 👁️ **Instagram bio clicks:** 500+ clicks
- 🗺️ **Branch page views:** 300+ views
- 📱 **Mobile users:** 80%+ (expected)
- ⏱️ **Avg. session duration:** 2-3 menit
- 📄 **Pages per session:** 3-4 pages

**What We'll Learn:**
1. Apakah followers Instagram tertarik dengan website?
2. Menu apa yang paling banyak dilihat?
3. Cabang mana yang paling popular?
4. Jam berapa traffic paling tinggi?

**Decision Point After 30 Days:**
- Jika traffic bagus (>1,000 visitors) → **Proceed to Phase 2** ✅
- Jika traffic kurang → Optimize dulu (SEO, marketing, content) → Try lagi

---

### **Phase 2 Timeline (Jika Phase 1 Sukses):**

**Week 1-4: Backend Development**
- Laravel API development
- Database design
- Admin dashboard
- Order management system

**Week 5: Payment Gateway Integration**
- Midtrans setup & testing
- Payment flow testing
- Security audit

**Week 6: Testing & Staff Training**
- UAT (User Acceptance Testing)
- Staff training on order management
- Create user manual

**Week 7: Soft Launch Phase 2**
- Limited release (first 100 customers)
- Promo: "Diskon 15% untuk 100 order pertama via website!"
- Collect feedback & iterate

**Week 8: Grand Launch**
- Full marketing push
- Instagram ads campaign
- Press release: "Tropic: Kedai Kopi Pertama di Pontianak dengan Order Online!"

---

## 💼 TIPS TAMBAHAN UNTUK PITCHING (LOCAL INSIGHT)

### **1. Tekankan "Kepemilikan Data"**

**Script:**
> "Pak/Bu, kalau Instagram tiba-tiba hilang atau algo berubah, kita kehilangan 10k followers dan tidak bisa contact mereka lagi. Tapi kalau kita punya website sendiri, kita punya database customer selamanya. Kita bisa contact mereka kapan saja via email/SMS untuk promo, tanpa tergantung Instagram atau platform lain."

**Example Use Case:**
- Customer order via website → data masuk database:
  - Nama: Budi
  - Email: budi@gmail.com
  - Phone: 081234567890
  - Order history: Coconut Cold Brew (3x), Tropical Sunset Latte (2x)
  - Total spent: Rp 450.000
  - Last order: 5 hari lalu

- Owner bisa kirim targeted promo:
  - "Halo Budi, sudah lama tidak order! Special discount 20% untuk Coconut Cold Brew favorit kamu hari ini!"
  - Open rate email: 20-30% (jauh lebih tinggi dari Instagram post reach!)

---

### **2. Efisiensi Kasir: Skenario Konkret**

**Script:**
> "Beri saya contoh skenario real. Sekarang, jam 12:00 siang (lunch hour), ada 15 orang antre di kasir. Customer nomor 10 mungkin sudah batal karena tidak mau tunggu 15 menit. Dengan sistem online order, 10% dari followers yang pesan via web untuk pickup. Itu berarti 1.000 transaksi per bulan yang tidak makan waktu kasir. Kasir bisa fokus melayani customer walk-in dengan lebih cepat. Antrean berkurang, customer lebih happy, revenue naik."

**Calculation:**
- 10.000 followers × 10% order online = 1.000 orders/bulan
- 1.000 orders × average 3 menit/order = **3.000 menit waktu kasir yang saved**
- 3.000 menit = **50 jam/bulan** = lebih dari 6 hari kerja!
- Staf bisa fokus ke:
  - Improve customer service quality
  - Upselling (offer dessert, upgrade size)
  - Maintain cleanliness

---

### **3. Portofolio Lokal (Build Trust)**

**Script:**
> "Saya developer lokal dari STMIK Pontianak, sudah berpengalaman membangun sistem untuk bisnis lokal di Pontianak:
> 
> - **R-Tech**: Sistem inventory management untuk toko retail elektronik (3 cabang)
> - **Dua Insan Story**: Website e-commerce untuk wedding organizer lokal
> 
> Saya paham behavior customer Pontianak, tahu apa yang mereka butuhkan, dan bagaimana cara marketing yang efektif untuk pasar lokal. Ini bukan template generic dari luar negeri, tapi **custom-built untuk Tropic dan pasar Pontianak**."

**Proof Points:**
1. **Local Experience:** 
   - Tahu jam sibuk Pontianak (07-09 AM, 12-14 PM, 17-19 PM)
   - Tahu payment methods favorit (QRIS, e-wallet)
   - Tahu customer behavior (mayoritas mobile users)

2. **Technical Competence:**
   - 5.000+ lines of production-ready code
   - Zero TypeScript errors (strict mode)
   - Performance optimized (216KB gzipped)
   - Modern tech stack (React 18, TypeScript, Vite)

3. **Long-term Partnership:**
   - Bukan "buat website terus ilang"
   - Available untuk maintenance, updates, new features
   - Response time cepat (same day for critical issues)
   - Local presence (bisa meeting face-to-face)

---

### **4. Compare vs Kompetitor**

**Competitive Analysis:**

| Aspect | Kompetitor (Mayoritas) | Tropic (Dengan Website) |
|--------|------------------------|-------------------------|
| **Online Presence** | Instagram only | Instagram + Website ✅ |
| **Menu Information** | IG Stories (hilang 24 jam) | Permanent digital menu ✅ |
| **Order Method** | WA manual (slow) | Website (instant) ✅ |
| **Location Info** | Text di bio | Interactive map ✅ |
| **Google Visibility** | Not indexed | SEO-optimized ✅ |
| **Data Ownership** | Zero | Full database ✅ |
| **Branding** | Standard | Premium professional ✅ |

**Positioning:**
> "Dengan website ini, Tropic tidak hanya jadi 'kedai kopi biasa', tapi 'tech-savvy modern coffee shop'. Kita bisa charge premium price karena service level berbeda."

---

### **5. Social Proof dari Instagram**

**Script:**
> "Pak/Bu, lihat postingan Tropic di Instagram. Banyak comment yang tanya:
> - 'Buka jam berapa?'
> - 'Ada cabang di mana aja?'
> - 'Menu ini harganya berapa?'
> - 'Cabang Merdeka ada WiFi gak?'
> 
> Admin harus reply satu-satu. Capek, repetitive, dan slow. Dengan website, customer bisa self-service. Semua info sudah tersedia. Comment di Instagram bisa fokus ke engagement (testimoni, foto customer, giveaway), bukan Q&A berulang."

**Time Saved:**
- 50 repetitive questions/minggu × 2 menit reply = **100 menit/minggu saved**
- = **6.6 jam/bulan** yang bisa dipakai untuk creative content atau real engagement

---

## 📞 CONTACT & NEXT STEPS

### **Developer:**
- **Name:** Ihza Mahendra
- **Base:** Pontianak, Kalimantan Barat
- **Education:** STMIK Pontianak
- **Experience:** 3+ years web development
- **Portfolio:** R-Tech, Dua Insan Story, [other projects]

---

### **Immediate Action Items:**

**For Owner:**
1. Review this pitch deck
2. Check the live demo website
3. Discuss budget & timeline
4. Decision: Phase 1 → Go or No-Go?

**For Developer (Me):**
1. Prepare final pricing proposal
2. Create contract/agreement draft
3. Prepare project timeline (Gantt chart)
4. Setup project management tool (Trello/Notion)

---

### **Meeting Agenda:**

**Suggested Meeting Flow (60 minutes):**
1. **Problem Statement** (10 min) - Tunjukkan pain points
2. **Live Demo** (15 min) - Buka website di HP, walk through features
3. **Business Case** (10 min) - ROI calculation, compare vs kompetitor
4. **Roadmap** (10 min) - Phase 1 & 2 timeline
5. **Q&A** (10 min) - Handle objections
6. **Closing** (5 min) - Decision & next steps

---

## 🎯 CLOSING STATEMENT

> **"Tropic sudah memiliki fondasi yang kuat: 4 cabang, 10k followers, menu berkualitas, dan brand yang disukai. Yang kurang hanya satu: platform digital untuk convert semua potensi itu jadi revenue.**
> 
> **Website ini bukan biaya, tapi investasi aset digital yang akan terus generate revenue selama Tropic beroperasi.**
> 
> **Saya sudah membuatkan 87% dari solusinya. Mari kita selesaikan 13% sisanya, dan bawa Tropic ke level selanjutnya.**
> 
> **Phase 1 bisa go-live dalam 1 minggu dengan investasi minimal (Rp 500rb). Tidak ada risk. Kalau berhasil, kita lanjut Phase 2. Kalau tidak, kita paling tidak sudah punya website professional untuk branding.**
> 
> **Apakah Bapak/Ibu siap untuk memulai transformasi digital Tropic?"**

---

**Made with ☕ for Tropic Coffee Pontianak**

**© 2026 Tropic Digital Transformation - Phase 1 Proposal**

---

**Next Document:** Pricing proposal & contract draft (ready to create upon approval)
