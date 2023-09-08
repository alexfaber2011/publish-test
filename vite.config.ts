import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'alexfaberllc-publish-test',
      // the proper extensions will be added
      fileName: 'alexfaberllc-publish-test',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
          // vue: 'Vue',
        // },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })]
})
