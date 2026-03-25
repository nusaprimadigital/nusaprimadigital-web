import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const portfolioItems = [
    { title: "E-Commerce Premium", category: "Web Development", img: "bg-slate-300 dark:bg-slate-800" },
    { title: "Company Profile Tech", category: "UI/UX & Web", img: "bg-slate-300 dark:bg-slate-800" },
    { title: "Aplikasi Manajemen HR", category: "Web App", img: "bg-slate-300 dark:bg-slate-800" },
    { title: "Booking Sistem Travel", category: "Fullstack Dev", img: "bg-slate-300 dark:bg-slate-800" },
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Karya <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Terbaik Kami</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Eksplorasi hasil kerja kami dalam mengubah ide menjadi pengalaman digital yang fungsional.
            </p>
          </div>
          <Link href="/portofolio" className="hidden md:flex items-center gap-2 font-semibold text-brand-teal hover:text-brand-blue transition-colors">
            Eksplorasi Portofolio <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 transition-all hover:shadow-2xl">
              <div className={`w-full h-80 ${item.img} transition-transform duration-700 group-hover:scale-105`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-brand-gold font-medium text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</p>
                <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ArrowRight size={20} className="-rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Link href="/portofolio" className="md:hidden mt-8 w-full py-4 rounded-full border border-slate-200 dark:border-slate-800 font-semibold flex items-center justify-center gap-2">
          Eksplorasi Portofolio <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}