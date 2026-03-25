import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { Post, Author } from "@/types";

export const revalidate = 60; 

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Artikel</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Wawasan terbaru seputar teknologi web, desain, dan pemasaran digital.
          </p>
        </div>

        {posts.length === 0 ? (
           <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
             <p className="text-xl text-slate-500 font-medium">Belum ada artikel yang diterbitkan.</p>
             <Link href="/studio" className="text-brand-teal hover:underline mt-2 inline-block">Masuk ke Studio untuk menulis.</Link>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const displayAuthor = typeof post.author === 'string' ? post.author : (post.author as Author)?.name;
              return (
              <article key={post._id} className="group flex flex-col h-full bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800">
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {post.mainImage && (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    {displayAuthor && (
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {displayAuthor}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <div className="mt-auto pt-4 flex gap-2">
                    {post.categories?.map((cat) => (
                      <span key={cat} className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )})}
          </div>
        )}
      </div>
    </div>
  );
}
