import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Project',
      type: 'string',
      validation: (rule) => rule.required().error('Nama project wajib diisi'),
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
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
      description: 'Ringkasan project untuk ditampilkan di halaman daftar portfolio',
      validation: (rule) => rule.required().error('Deskripsi wajib diisi'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Teks Alternatif (Alt Text)',
          description: 'Deskripsi gambar untuk aksesibilitas dan SEO',
        },
      ],
    }),
    defineField({
      name: 'client',
      title: 'Nama Klien',
      type: 'string',
      description: 'Nama klien atau perusahaan pemilik project',
    }),
    defineField({
      name: 'year',
      title: 'Tahun',
      type: 'string',
      description: 'Tahun project dikerjakan (misal: 2025)',
    }),
    defineField({
      name: 'url',
      title: 'URL Project',
      type: 'url',
      description: 'Link ke website yang sudah live',
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Teknologi',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Teknologi yang digunakan (misal: Next.js, Tailwind, WordPress)',
    }),
    defineField({
      name: 'body',
      title: 'Detail Project',
      type: 'blockContent',
      description: 'Penjelasan lengkap tentang project: tantangan, solusi, hasil',
    }),
    defineField({
      name: 'gallery',
      title: 'Galeri Screenshot',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Teks Alternatif',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      description: 'Screenshot tambahan dari project',
    }),
  ],

  orderings: [
    {
      title: 'Terbaru',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      client: 'client',
      year: 'year',
      media: 'mainImage',
    },
    prepare(selection) {
      const { client, year } = selection
      const subtitle = [client, year].filter(Boolean).join(' · ')
      return { ...selection, subtitle: subtitle || 'Portfolio Project' }
    },
  },
})
