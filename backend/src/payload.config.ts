import 'dotenv/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Blogs } from './collections/Blogs'
// Collection Imports
import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Use process.env for the URL to ensure it works on both Local and Render
  serverURL: process.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000',
  
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // This fixes the login "disappearing" issue on Render production
    // @ts-ignore
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
    },
  },

  // Added your new Blogs and Media collections here
  collections: [Users, Media, Blogs],
  
  editor: lexicalEditor(),
  
  // Ensure your PAYLOAD_SECRET is in your Render Environment variables
  secret: process.env.PAYLOAD_SECRET || 'emergency-secret-key-123',
  
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),

  sharp,

  // Cloudinary integration can be added later
  plugins: [],
})