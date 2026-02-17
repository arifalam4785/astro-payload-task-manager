
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'text/html'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Technology', value: 'tech' },
        { label: 'Personal', value: 'personal' },
      ],
      defaultValue: 'general',
      admin: { position: 'sidebar' },
    },
    {
      name: 'alt',
      type: 'text',
    },
  ],
}