import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>
      </div>

      {/* Gradient Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-teal/20 dark:bg-brand-teal/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/20 dark:bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium mb-8 text-white border border-white/20">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
          Tersedia untuk proyek baru
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl text-white drop-shadow-lg">
          Wujudkan Visi Digital Anda dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Desain Eksklusif</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
          Kami membangun website modern, cepat, dan responsif yang didesain khusus untuk meningkatkan konversi dan kredibilitas bisnis Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-gold/50">
            Konsultasi Gratis <ArrowRight size={20} />
          </Link>
          <Link href="/portfolio" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:border-brand-teal hover:bg-white/20 text-white font-semibold rounded-full transition-all flex items-center justify-center">
            Lihat Portofolio
          </Link>
        </div>
      </div>
    </section>
  );
}