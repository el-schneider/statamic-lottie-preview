import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue2 from "@vitejs/plugin-vue2";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/addon.js"],
            publicDirectory: "resources/dist",
        }),
        vue2(),
    ],
    resolve: {
        alias: {
            "@components": path.resolve(
                __dirname,
                "vendor/statamic/cms/resources/js/components"
            ),
        },
    },
});
