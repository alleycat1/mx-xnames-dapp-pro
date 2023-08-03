import path from "path"
import { defineConfig,loadEnv  } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"

const resolveFixup = {
  name: "resolve-fixup",
  setup(build) {
    build.onResolve({ filter: /react-virtualized/ }, async (args) => {
      return {
        path: path.resolve(
          "./node_modules/react-virtualized/dist/umd/react-virtualized.js"
        ),
      }
    })
  },
}

// https://vitejs.dev/config/
export default ({mode})=>{
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    root: "src",
    define: {
      "process.browser": "import.meta.browser",
      "process.version.slice(0, 5)": '"10"',
    },
    plugins: [react(), tsconfigPaths()],
    build: {
      target: "esnext",
      outDir: "../dist",
    },
    server: {
      // https: true,
      port: 3000,
    },
    resolve: {
      alias: {
        path: "path-browserify",
        stream: "stream-browserify",
        crypto: "crypto-browserify",
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: "globalThis",
        },
        // Enable esbuild polyfill plugins
        plugins: [
          resolveFixup,
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }),
        ],
      },
    },
  })
}
