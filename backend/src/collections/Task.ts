import type { CollectionConfig } from 'payload'

export const Tasks: CollectionConfig = {
  slug: 'tasks',
  // ADD THIS SECTION:
  access: {
    read: () => true,   // Anyone can view tasks
    create: () => true, // Anyone can create tasks
    update: () => true, // Anyone can update tasks
    delete: () => true, // Anyone can delete tasks
  },
  admin: {
    useAsTitle: 'content',
  },
  fields: [
    {
      name: 'content',
      type: 'text',
      required: true,
    },
    {
      name: 'completed',
      type: 'checkbox',
      defaultValue: false,
    },
    {
    name: 'taskImage',
    type: 'upload', // Tells Payload this is a file
    relationTo: 'media', // Links it to the Media collection
  },
  ],
}