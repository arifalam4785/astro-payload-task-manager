import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Tasks } from './collections/Task'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Use process.env for Node.js backends
  serverURL: process.env.PUBLIC_PAYLOAD_URL || 'https://astro-payload-task-manager.onrender.com',

  // Allow configuring the frontend origin via env var for deployed environments
  // Set PUBLIC_FRONTEND_URL to your frontend origin (e.g. https://example.com)
  cors: [
    process.env.PUBLIC_FRONTEND_URL || 'http://localhost:4321',
    process.env.PUBLIC_PAYLOAD_URL || 'https://astro-payload-task-manager.onrender.com',
  ],
  csrf: [
    process.env.PUBLIC_FRONTEND_URL || 'http://localhost:4321',
    process.env.PUBLIC_PAYLOAD_URL || 'https://astro-payload-task-manager.onrender.com',
  ],

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // ✅ MOVED HERE: In Payload v3, cookieOptions lives inside admin
    // This allows the cookie to be shared between localhost and Render
    // @ts-expect-error
    cookieOptions: {
      secure: true,
      sameSite: 'none',
    },
  },
  
  collections: [Users, Media, Tasks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
  
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({        
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})