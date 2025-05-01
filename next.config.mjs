import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
