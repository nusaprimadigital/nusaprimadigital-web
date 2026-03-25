import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-teal/20 dark:bg-brand-teal/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/20 dark:bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium mb-8 text-brand-teal border border-slate-200 dark:border-slate-700">
        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
        Tersedia untuk proyek baru
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
        Wujudkan Visi Digital Anda dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Desain Eksklusif</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
        Kami membangun website modern, cepat, dan responsif yang didesain khusus untuk meningkatkan konversi dan kredibilitas bisnis Anda.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/kontak" className="px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-gold/50">
          Konsultasi Gratis <ArrowRight size={20} />
        </Link>
        <Link href="/portofolio" className="px-8 py-4 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 hover:border-brand-teal font-semibold rounded-full transition-all flex items-center justify-center">
          Lihat Portofolio
        </Link>
      </div>
    </section>
  );
}