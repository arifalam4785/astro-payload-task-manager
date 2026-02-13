import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    // Just use a simple object; Payload 3.0 defaults to /media
    staticDir: 'media',
    // If staticUrl still shows red, remove it and Payload will default to /media
    // Allow HTML files in addition to images
    mimeTypes: ['image/*', 'text/html'],
  },
  access: {
    read: () => true,
    create: () => true,
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
    admin: { position: 'sidebar' } // Puts it on the right side in the admin UI
  },
  { name: 'alt', type: 'text' }
],
}