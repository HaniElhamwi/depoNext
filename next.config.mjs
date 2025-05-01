/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rickandmortyapi.com", "localhost"],
  },
  turbopack: {
    resolveAlias: {
      underscore: "lodash",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
};

export default nextConfig;
