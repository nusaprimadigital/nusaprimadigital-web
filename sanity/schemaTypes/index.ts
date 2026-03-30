import { type SchemaTypeDefinition } from 'sanity'

import author from './author'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import project from './project'
import service from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blockContent, category, post, project, service],
}
