/**
 * @type {import('next').NextConfig}
 */

import path from "path"

import { URL } from "url"

const __filename = new URL("", import.meta.url).pathname
// Will contain trailing slash
const __dirname = new URL(".", import.meta.url).pathname

const nextConfig = {
  /* config options here */
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}

export default nextConfig
