import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Judul wajib diisi'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug wajib di-generate'),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi / Excerpt',
      type: 'text',
      rows: 3,
      description: 'Ringkasan singkat untuk ditampilkan di halaman daftar blog (maks. 200 karakter)',
      validation: (rule) => rule.max(200).warning('Deskripsi sebaiknya tidak lebih dari 200 karakter'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'cloudinary.asset',
      description: 'Pilih gambar dari Cloudinary untuk disajikan langsung melalui CDN Cloudinary',
    }),
    defineField({
      name: 'categories',
      title: 'Kategori',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publish',
      type: 'datetime',
      validation: (rule) => rule.required().error('Tanggal publish wajib diisi'),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Konten',
      type: 'blockContent',
    }),
  ],

  orderings: [
    {
      title: 'Tanggal Publish (Terbaru)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Tanggal Publish (Terlama)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { author, date } = selection
      const subtitle = [
        author && `oleh ${author}`,
        date && new Date(date).toLocaleDateString('id-ID'),
      ]
        .filter(Boolean)
        .join(' · ')
      return { ...selection, subtitle }
    },
  },
})
