import { client } from "@/sanity/lib/client";
import { projectQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Project } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project: Project = await client.fetch(projectQuery, { slug });

  if (!project) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold">Project tidak ditemukan</h1>
        <Link href="/portfolio" className="text-brand-teal mt-4 inline-block">Kembali ke Portofolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-teal mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali ke Portofolio
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Project Metadata */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.client && (
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Building2 size={16} className="text-brand-teal" />
                      <span>{project.client}</span>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={16} className="text-brand-gold" />
                      <span>{project.year}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-brand-teal/10 text-brand-teal font-medium rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                
                {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-800 transition-colors shadow-lg">
                        Kunjungi Website <ExternalLink size={18} />
                    </a>
                )}
            </div>
            
            <div className="relative">
                {project.mainImage ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                        <Image
                            src={urlForImage(project.mainImage).url()}
                            alt={project.mainImage.alt || project.title}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ) : (
                    <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
                        No Image
                    </div>
                )}
            </div>
        </div>

        {/* Rich Text Content */}
        {project.body && (
          <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-8">Detail Project</h2>
            <div className="prose max-w-none">
              <PortableText value={project.body} />
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-8">Screenshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
                  <Image
                    src={urlForImage(img).url()}
                    alt={img.alt || `Screenshot ${idx + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  {img.caption && (
                    <p className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
