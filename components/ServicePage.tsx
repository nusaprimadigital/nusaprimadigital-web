import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServicePage({
  title,
  description,
  features,
  price,
  ctaText = "Konsultasi Sekarang",
  ctaLink = "/contact",
}: ServicePageProps) {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              {title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4">
              <Link
                href={ctaLink}
                className="px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-white font-semibold rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-brand-gold/50"
              >
                {ctaText} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="text-9xl font-bold opacity-10 select-none">SERVICE</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Yang Anda Dapatkan</h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="text-brand-teal mt-0.5 shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 rounded-3xl bg-brand-blue/5 dark:bg-brand-blue/10 border border-brand-blue/10 dark:border-brand-blue/20 flex flex-col justify-center items-center text-center">
             <h3 className="text-2xl font-bold mb-2">Mulai dari</h3>
             <div className="text-5xl font-extrabold text-brand-blue dark:text-brand-teal mb-4">
               {price || "Hubungi Kami"}
             </div>
             <p className="text-slate-600 dark:text-slate-400 mb-8">
               Harga terbaik untuk kualitas profesional. Disesuaikan dengan kebutuhan spesifik Anda.
             </p>
             <Link href="/contact" className="w-full py-3 rounded-xl bg-white dark:bg-slate-800 text-brand-blue dark:text-brand-teal font-bold border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform block text-center">
               Dapatkan Penawaran
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
