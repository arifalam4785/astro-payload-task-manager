declare module '@payloadcms/plugin-cloudinary' {
  import type { Plugin } from 'payload'
  type CloudinaryOptions = Record<string, any>
  export function cloudinaryStorage(options?: CloudinaryOptions): Plugin
  export default cloudinaryStorage
}

declare module '@payloadcms/storage-cloudinary' {
  import type { Plugin } from 'payload'
  type CloudinaryOptions = Record<string, any>
  export function cloudinaryStorage(options?: CloudinaryOptions): Plugin
  export default cloudinaryStorage
}
