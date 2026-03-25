import { client } from "@/sanity/lib/client";
import { postQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Post, Author } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post: Post = await client.fetch(postQuery, { slug });

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <Link href="/blog" className="text-brand-teal mt-4 inline-block">Kembali ke Blog</Link>
      </div>
    );
  }

  const authorName = typeof post.author === 'string' ? post.author : (post.author as Author)?.name;

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-teal mb-8 transition-colors">
          <ArrowLeft size={20} /> Kembali ke Blog
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400 mb-8 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {new Date(post.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          {authorName && (
            <div className="flex items-center gap-2">
              <User size={18} />
              {authorName}
            </div>
          )}
        </div>

        {post.mainImage && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10 bg-slate-200">
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose max-w-none">
          {post.body && <PortableText value={post.body} />}
        </div>
      </div>
    </article>
  );
}
