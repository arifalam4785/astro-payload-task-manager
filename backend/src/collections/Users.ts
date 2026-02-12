import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // This one line adds login/logout/session logic!
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email and Password are added automatically by "auth: true"
    {
      name: 'name',
      type: 'text',
    },
  ],
}