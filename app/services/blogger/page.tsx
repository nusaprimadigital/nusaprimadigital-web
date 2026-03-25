import ServicePage from "@/components/ServicePage";

export default function BloggerPage() {
  return (
    <ServicePage
      title="Jasa Pembuatan Website Blogger (Blogspot)"
      description="Platform blogging milik Google yang stabil, gratis hosting selamanya, dan sangat aman. Pilihan tepat untuk Anda yang ingin fokus pada konten tanpa memikirkan biaya server tahunan."
      features={[
        "Kustomisasi Template Premium",
        "Setup Custom Domain (.com/.id/dll)",
        "SEO On-Page Optimization",
        "Loading Cepat & Ringan",
        "Tanpa Biaya Hosting Bulanan/Tahunan",
        "Integrasi Google AdSense Siap Pakai",
      ]}
      price="Rp 1.500.000"
    />
  );
}
