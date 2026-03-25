'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Konten Website')
          .items([
            // Blog Group
            S.listItem()
              .title('📝 Blog')
              .child(
                S.list()
                  .title('Blog')
                  .items([
                    S.documentTypeListItem('post').title('Artikel'),
                    S.documentTypeListItem('author').title('Penulis'),
                    S.documentTypeListItem('category').title('Kategori'),
                  ])
              ),
            S.divider(),
            // Portfolio Group
            S.listItem()
              .title('💼 Portfolio')
              .child(
                S.documentTypeList('project').title('Daftar Project')
              ),
            S.divider(),
            // Services Group
            S.listItem()
              .title('⚙️ Layanan')
              .child(
                S.documentTypeList('service').title('Daftar Layanan')
              ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
