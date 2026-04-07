# CMLabs Frontend Part-time Test

[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://singgihseptiann-cmlabs-frontend-par.vercel.app/)
![Next.js](https://img.shields.io/badge/Next.js-16.2.2-blue?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)

Proyek ini dibuat sebagai hasil tugas frontend part-time CMLabs, dibangun menggunakan Next.js App Router.

🚀 **Live Preview:** [https://singgihseptiann-cmlabs-frontend-par.vercel.app/](https://singgihseptiann-cmlabs-frontend-par.vercel.app/)

---

## 🛠️ Tech Stack & Packages

- **Framework Utama:** [Next.js](https://nextjs.org/) (versi 16.2.2)
- **Library UI:** [React](https://react.dev/) & React-DOM (versi 19.2.4)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/) (versi 5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (versi 4) dengan `@tailwindcss/postcss`
- **Package Tambahan / Dependencies:**
  - `react-infinite-scroll-component` (^7.0.0): Digunakan untuk implementasi fitur *infinite scrolling* dan memuat data secara dinamis tanpa sistem paginasi manual.
  - `clsx` (^2.1.1): Utility ringan untuk membangun dan menggabungkan kumpulan `className` bersyarat (*conditional classNames*) dengan mudah.
- **Linter & Formatter:** ESLint (^9) beserta konfigurasi bawaan `eslint-config-next`.

---

## 🚀 Persiapan dan Instalasi

Ikuti panduan berikut untuk menduplikasi, menginstal, dan menjalankan proyek secara lokal di perangkat Anda.

### 1. Clone Repository

Buka terminal pilihan Anda (seperti Git Bash, Command Prompt, atau terminal bawaan VS Code), lalu jalankan perintah berikut:

```bash
git clone https://github.com/singgihseptiann/singgihseptiann-cmlabs-frontend-parttime-test.git
```

Masuk ke dalam direktori proyek yang baru saja di-clone:

```bash
cd singgihseptiann-cmlabs-frontend-parttime-test
```

### 2. Catatan Khusus TypeScript

> [!CAUTION]
> **Penting:** Jika Anda mengalami kendala saat melakukan instalasi atau *audit* dependencies yang memberitahukan bahwa `tsc` / `typescript` tidak ditemukan, Anda perlu menginstal TypeScript pada sistem perangkan Anda terlebih dahulu.

Instal **TypeScript** secara global dengan menjalankan:
```bash
npm install -g typescript
```

### 3. Install Dependencies

Untuk mengunduh dan menginstal seluruh package yang dibutuhkan sebagaimana tercantum pada file `package.json`, jalankan:

```bash
npm install
```

---

## 💻 Menjalankan Aplikasi Web

### Development Server

Untuk mulai melihat bentuk visualisasi web sembari melakukan pemrograman (fitur *hot-reload* aktif), jalankan environment development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat antarmuka proyek yang sedang berjalan.

### Production Build

Jika Anda ingin menguji optimasi web ketika masuk tahap rilis (*production*), lakukan proses *build* terlebih dahulu:

```bash
npm run build
```

Setelah proses *build* berhasil dirilis, jalankan server mode produksi:

```bash
npm run start
```

---

## 📜 Daftar Skrip Lengkap

Untuk acuan lebih jauh, berikut adalah detail masing-masing *scripts* di dalam `package.json`:

- `npm run dev` : Menjalankan development server di sisi lokal.
- `npm run build` : Membuat versi *build* aplikasi web yang telah dioptimasi dan siap masuk ke server produksi.
- `npm run start` : Menjalankan versi production dari proyek (wajib menjalankan tahap *build* dulu).
- `npm run lint` : Menjalankan penganalisis statis ESLint untuk menelusuri penulisan kode yang bermasalah.
