import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PortfolioPage() {
  const projects: Project[] = await client.fetch(projectsQuery);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portofolio Kami</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Karya terbaik yang telah kami kerjakan untuk klien-klien hebat kami.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-xl text-slate-500 font-medium">Belum ada portofolio yang ditambahkan.</p>
            <p className="text-sm text-slate-400 mt-2">Silakan tambahkan data di Sanity Studio.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project._id} className="group overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-slate-900 font-medium rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            Kunjungi Website <ExternalLink size={16} />
                        </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">
                    <Link href={`/portfolio/${project.slug?.current}`}>{project.title}</Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
