import { Code, Layout, Smartphone, Search, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const servicesList = [
    { icon: Layout, title: "UI/UX Design", desc: "Desain antarmuka estetis dan intuitif yang berpusat pada pengalaman pengguna." },
    { icon: Code, title: "Web Development", desc: "Pengembangan sistem yang tangguh dengan teknologi terkini (Next.js & TypeScript)." },
    { icon: Smartphone, title: "Responsive Layout", desc: "Tampil sempurna di segala resolusi perangkat, dari desktop hingga smartphone." },
    { icon: Search, title: "SEO Optimization", desc: "Struktur kode yang ramah mesin pencari untuk meningkatkan visibilitas organik." },
    { icon: Zap, title: "High Performance", desc: "Optimasi kecepatan muat halaman untuk Core Web Vitals yang maksimal." },
    { icon: ShieldCheck, title: "Security First", desc: "Penerapan standar keamanan modern untuk melindungi data Anda dan pengguna." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan Kami</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Solusi digital komprehensif dari tahap desain hingga optimasi performa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, idx) => (
          <div key={idx} className="p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800 hover:border-brand-teal/50 transition-all hover:-translate-y-1 hover:shadow-xl group">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <service.icon size={28} className="text-brand-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/layanan" className="inline-flex items-center gap-2 font-semibold text-brand-teal hover:text-brand-blue transition-colors">
          Lihat Detail Semua Layanan <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}