import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	base: "./",
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			"@this": path.resolve(__dirname, "src"),
		},
	},
});
