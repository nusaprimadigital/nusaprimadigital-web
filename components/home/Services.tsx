import { Code, Layout, Smartphone, Search, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const servicesList = [
    { 
      icon: Layout, 
      title: "UI/UX Design", 
      desc: "Desain antarmuka estetis dan intuitif yang berpusat pada pengalaman pengguna.",
      image: "/ecommerce.webp"
    },
    { 
      icon: Code, 
      title: "Web Development", 
      desc: "Pengembangan sistem yang tangguh dengan teknologi terkini (Next.js & TypeScript).",
      image: "/sekolah.webp"
    },
    { 
      icon: Smartphone, 
      title: "Responsive Layout", 
      desc: "Tampil sempurna di segala resolusi perangkat, dari desktop hingga smartphone.",
      image: "/bengkel-las.webp"
    },
    { 
      icon: Search, 
      title: "SEO Optimization", 
      desc: "Struktur kode yang ramah mesin pencari untuk meningkatkan visibilitas organik.",
      image: "/ecommerce.webp"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan Kami</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Solusi digital komprehensif dari tahap desain hingga optimasi performa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((service, idx) => (
          <div key={idx} className="rounded-3xl bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800 hover:border-brand-teal/50 transition-all hover:-translate-y-1 hover:shadow-xl group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-center">
                <service.icon size={24} className="text-brand-teal" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-brand-teal hover:text-brand-blue transition-colors">
          Lihat Detail Semua Layanan <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}