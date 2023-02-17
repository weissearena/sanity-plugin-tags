import {SchemaTypeDefinition} from 'sanity'

export const tagsSchema: SchemaTypeDefinition = {
  name: 'tags',
  title: 'Tags',
  type: 'array',
  components: {
    // input: Input
  },
  of: [{type: 'tag'}],
}
