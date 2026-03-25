import Services from "@/components/home/Services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesIndexPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Digital Kami</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Kami menyediakan berbagai solusi digital untuk membantu bisnis Anda tumbuh dan bersaing di era modern.
        </p>
      </div>
      <Services />
      
      <div className="bg-slate-50 dark:bg-slate-900 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Butuh Solusi Khusus?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
                Jika Anda memiliki kebutuhan yang tidak tercantum di atas, kami siap mendiskusikan solusi custom yang sesuai dengan tujuan bisnis Anda.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal hover:bg-teal-600 text-white font-bold rounded-full transition-colors shadow-lg shadow-brand-teal/20">
                Hubungi Tim Kami <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
}
