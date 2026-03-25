import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-teal to-brand-blue rounded-[2.5rem] p-10 md:p-16 text-center text-white mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Siap Mendominasi Era Digital?</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto relative z-10">
            Mari diskusikan visi Anda. Tim kami siap merancang solusi teknologi yang disesuaikan khusus untuk pertumbuhan bisnis Anda.
          </p>
          <Link href="/kontak" className="inline-block px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-brand-gold/50 relative z-10 hover:-translate-y-1">
            Mulai Konsultasi Proyek
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-8 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-blue rounded-md flex items-center justify-center font-bold text-white text-sm">
              N
            </div>
            <span className="font-bold tracking-tight">Agency © {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link href="/tentang-kami" className="hover:text-brand-teal transition-colors">Tentang Kami</Link>
            <Link href="/layanan" className="hover:text-brand-teal transition-colors">Layanan</Link>
            <Link href="/blog" className="hover:text-brand-teal transition-colors">Blog</Link>
          </div>

          <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
            <Link href="#" className="hover:text-brand-gold transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}