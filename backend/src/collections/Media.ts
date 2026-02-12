import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // Just use a simple object; Payload 3.0 defaults to /media
    staticDir: 'media',
    // If staticUrl still shows red, remove it and Payload will default to /media
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}