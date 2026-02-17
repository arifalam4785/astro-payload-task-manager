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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Ensure the server URL points to your Render domain in production
  serverURL: process.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000',
  
  admin: {
    user: Users.slug,
    // Simplifying the importMap is the key to fixing the "Status 1" build error
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Ensure Blogs is included here
  collections: [Users, Media, Blogs],
  
  editor: lexicalEditor(),
  
  secret: process.env.PAYLOAD_SECRET || 'emergency-secret-key-123',
  
  db: mongooseAdapter({
    // Render will use the DATABASE_URL from your Environment Variables
    url: process.env.DATABASE_URL || '',
  }),

  sharp,

  // Re-adding the Cloudinary plugin logic properly
  plugins: [
    // You can uncomment this once the basic build passes
    /*
    cloudinaryStorage({
      collections: {
        media: true,
      },
      config: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      },
    }),
    */
  ],
})