import {SchemaTypeDefinition} from 'sanity'

export const tagSchema: SchemaTypeDefinition = {
  name: 'tag',
  title: 'Tag',
  type: 'object',
  components: {
    // input: Input
  },
  fields: [
    {
      name: 'value',
      type: 'string',
    },
    {
      name: 'label',
      type: 'string',
    },
  ],
}
