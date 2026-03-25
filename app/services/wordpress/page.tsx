import ServicePage from "@/components/ServicePage";

export default function WordpressPage() {
  return (
    <ServicePage
      title="Jasa Pembuatan Website WordPress Profesional"
      description="Solusi website fleksibel, mudah dikelola, dan ramah SEO dengan platform CMS terpopuler di dunia. Cocok untuk company profile, toko online, hingga portal berita."
      features={[
        "Desain Premium & Responsive",
        "Optimasi Kecepatan (Core Web Vitals)",
        "Struktur SEO Friendly",
        "Integrasi Plugin Keamanan",
        "Tutorial Pengelolaan Admin Dashboard",
        "Backup Berkala",
        "Integrasi Google Analytics",
      ]}
      price="Rp 3.500.000"
    />
  );
}
