import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Siap memulai proyek impian Anda? Diskusikan kebutuhan Anda dengan tim kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 h-full">
              <h3 className="text-2xl font-bold mb-8">Informasi Kontak</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-teal" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400">hello@legacy-agency.com</p>
                    <p className="text-slate-600 dark:text-slate-400">support@legacy-agency.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telepon & WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-400">+62 812-3456-7890</p>
                    <p className="text-slate-500 text-sm mt-1">Senin - Jumat, 09:00 - 17:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Kantor</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Jl. Raya Kerobokan No. 123<br />
                      Kuta Utara, Badung<br />
                      Bali, Indonesia 80361
                    </p>
                  </div>
                </div>
              </div>

               <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                 <p className="text-sm text-slate-500 italic">
                   "Respon cepat dan hasil memuaskan. Sangat direkomendasikan!" - Klien X
                 </p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subjek</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all">
                  <option>Pembuatan Website Baru</option>
                  <option>Redesign Website</option>
                  <option>Masalah Teknis</option>
                  <option>Kerjasama</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Pesan</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="Ceritakan detail proyek Anda..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-teal hover:bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-brand-teal/30 transition-all flex items-center justify-center gap-2">
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
