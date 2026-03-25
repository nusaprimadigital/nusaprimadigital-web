# Bali Web Agency CMS (N-Agency)

Website agency profesional yang dibangun dengan teknologi modern: **Next.js 15+ (App Router)**, **Sanity CMS**, dan **Tailwind CSS**. Didesain dengan prinsip Gestalt untuk pengalaman pengguna (UX) yang optimal dan antarmuka (UI) yang elegan.

## 🚀 Fitur Utama

- **Modern & Cepat**: Dibangun di atas Next.js 15 dengan server-side rendering (SSR) untuk performa maksimal dan SEO yang lebih baik.
- **Content Management System (CMS)**: Mengelola konten blog, portofolio, dan layanan dengan mudah menggunakan Sanity Studio.
- **Responsive Design**: Tampilan yang sempurna di semua perangkat (Desktop, Tablet, Mobile).
- **Dark Mode**: Dukungan tema gelap dan terang yang nyaman di mata.
- **Gestalt Principles**: Penerapan prinsip desain (Proximity, Similarity, Continuity) untuk tata letak yang intuitif.
- **Modular Components**: Kode yang terstruktur, mudah dipelihara, dan dikembangkan lebih lanjut.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **State Management**: React Hooks
- **Language**: TypeScript

## 📦 Struktur Project

```bash
├── app/                  # Halaman aplikasi (App Router)
│   ├── about/            # Halaman Tentang Kami
│   ├── blog/             # Halaman Blog & Artikel
│   ├── contact/          # Halaman Kontak
│   ├── portfolio/        # Halaman Portofolio
│   ├── services/         # Halaman Layanan
│   ├── studio/           # Halaman Sanity Studio
│   ├── layout.tsx        # Layout utama website
│   └── page.tsx          # Halaman Beranda (Home)
├── components/           # Komponen UI yang dapat digunakan kembali
│   ├── home/             # Komponen khusus halaman Home
│   ├── layout/           # Komponen layout (Footer)
│   ├── Navbar.tsx        # Navigasi utama
│   └── ServicePage.tsx   # Template halaman layanan
├── sanity/               # Konfigurasi Sanity CMS
│   ├── schemaTypes/      # Definisi schema konten
│   └── lib/              # Utilitas client & image builder
├── public/               # Aset statis
└── tailwind.config.ts    # Konfigurasi tema & warna
```

## 📝 Panduan Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

### 1. Prasyarat

Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (Versi 18 atau lebih baru)
- npm atau yarn

### 2. Clone Repository

```bash
git clone https://github.com/username/agency-website.git
cd agency-website
```

### 3. Instal Dependencies

```bash
npm install
# atau
yarn install
```

### 4. Konfigurasi Environment Variables

Buka file `sanity/env.ts` atau buat file `.env.local` di root folder proyek dan tambahkan konfigurasi berikut (sesuaikan dengan project ID Sanity Anda):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=rrsjixpb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-25
```

> **Catatan**: Project ID `rrsjixpb` telah dibuatkan otomatis untuk Anda dan dikonfigurasi di `sanity/env.ts`.

### 5. Jalankan Development Server

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 6. Mengakses CMS (Sanity Studio)

Buka [http://localhost:3000/studio](http://localhost:3000/studio) untuk masuk ke dashboard admin. Anda dapat login menggunakan akun Sanity Anda (atau Google/GitHub).

Di sini Anda dapat menambahkan:
- **Postingan Blog**
- **Portofolio Project**
- **Penulis (Author)**
- **Kategori**
- **Layanan Baru**

## 🔧 Deployment

Proyek ini sangat mudah dideploy ke **Vercel**:

1. Push kode ke GitHub/GitLab/Bitbucket.
2. Buat proyek baru di Vercel dan hubungkan repository tersebut.
3. Tambahkan Environment Variables di pengaturan Vercel.
4. Klik **Deploy**.

## 🎨 Design System

Kami menggunakan palet warna yang konsisten sesuai brand identity:
- **Brand Teal**: `#20b2aa` (Aksen utama, tombol primary)
- **Brand Blue**: `#2b5876` (Warna sekunder, gradient)
- **Brand Gold**: `#D4AF37` (Highlight, CTA khusus)
- **Background Light**: `#FAFAFA`
- **Background Dark**: `#0F172A`

---

Dibuat dengan ❤️ oleh Djembar Arafat.
