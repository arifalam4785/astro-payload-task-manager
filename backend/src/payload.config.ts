import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collection Imports
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Blogs } from './collections/Blogs'
import { Tasks } from './collections/Task'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000',
  cors: ['http://localhost:4321'],
  csrf: ['http://localhost:4321'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [Users, Media, Blogs, Tasks],
  
  editor: lexicalEditor(),
  
  secret: process.env.PAYLOAD_SECRET || 'emergency-secret-key-123',
  
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: mongooseAdapter({
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/payload',
  }),

  sharp,

  plugins: [],
})