import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    resolve: {
      dedupe: ["vue", "vue-router"],
    },
    lib: {
      entry: path.resolve(__dirname, "src/components/ui/index.js"),
      name: "ScrubbedComponentLibrary",
      fileName: (format) => `scrubbed-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "vueRouter",
        },
      },
    },
  },
  rollupOptions: {
    external: ["vue", "vue-router"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
});
