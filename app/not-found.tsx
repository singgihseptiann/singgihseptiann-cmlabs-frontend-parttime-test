import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex bg-white flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-9xl font-extrabold text-zinc-900 tracking-widest">404</h1>
      <div className="bg-orange-500 text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-zinc-800 mb-4">Ups, halaman tidak ditemukan!</h2>
        <p className="text-zinc-600 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-300 shadow-sm"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
