/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rickandmortyapi.com"],
  },
  turbopack: {
    // Example: adding an alias and custom file extension
    resolveAlias: {
      underscore: "lodash",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
};

export default nextConfig;
