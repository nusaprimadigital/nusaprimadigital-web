import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Membangun Masa Depan Digital Anda
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Bali Web Agency (N-Agency) adalah tim profesional yang berdedikasi untuk membantu bisnis bertransformasi di era digital. Kami percaya bahwa website bukan sekadar "ada", tetapi harus menjadi aset berharga yang menghasilkan profit.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 5 tahun, kami telah menangani berbagai klien mulai dari UMKM hingga korporasi besar. Fokus kami adalah pada kualitas kode, performa, dan desain yang memanjakan mata (Gestalt Principles).
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="flex flex-col gap-1">
                 <div className="text-3xl font-bold text-brand-teal">50+</div>
                 <div className="text-sm text-slate-500">Proyek Selesai</div>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="text-3xl font-bold text-brand-blue">98%</div>
                 <div className="text-sm text-slate-500">Klien Puas</div>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="text-3xl font-bold text-brand-gold">5 Tahun</div>
                 <div className="text-sm text-slate-500">Pengalaman</div>
               </div>
               <div className="flex flex-col gap-1">
                 <div className="text-3xl font-bold text-slate-700 dark:text-slate-200">24/7</div>
                 <div className="text-sm text-slate-500">Support</div>
               </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative shadow-2xl skew-y-3">
               {/* Placeholder for About Image if available, otherwise a gradient/pattern */}
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-teal opacity-90"></div>
               <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                 Tim Kami
               </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Inovasi", desc: "Selalu mengikuti perkembangan teknologi terbaru." },
              { title: "Integritas", desc: "Jujur, transparan, dan dapat diandalkan dalam setiap kerjasama." },
              { title: "Kualitas", desc: "Tidak ada kompromi untuk hasil akhir yang sempurna." }
            ].map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm">
                 <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
