import {definePlugin} from 'sanity'
import {tagSchema} from './schemas/tag'
import {tagsSchema} from './schemas/tags'

interface MyPluginConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {tags} from 'sanity-plugin-tags'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [tags()],
 * })
 * ```
 */
export const tags = definePlugin<MyPluginConfig | void>((config = {}) => ({
  name: 'sanity-plugin-tags',
  schema: {
    types: [tagSchema, tagsSchema],
  },
}))
