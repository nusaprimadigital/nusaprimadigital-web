import ServicePage from "@/components/ServicePage";

export default function CustomWebPage() {
  return (
    <ServicePage
      title="Jasa Pembuatan Website Custom (Next.js / React)"
      description="Website dengan performa tinggi, keamanan maksimal, dan skalabilitas tanpa batas. Dibangun dengan teknologi modern (Next.js, React, Tailwind) untuk kebutuhan bisnis yang lebih kompleks."
      features={[
        "Teknologi Modern (Next.js App Router)",
        "Performa Sangat Cepat (Server Side Rendering)",
        "Keamanan Tingkat Tinggi",
        "Desain UI/UX Eksklusif (Gestalt Principles)",
        "PWA (Progressive Web Apps) Ready",
        "Integrasi API & Database Custom",
        "Scalable Infrastructure",
      ]}
      price="Rp 7.000.000"
    />
  );
}
