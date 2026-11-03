const repo = "unionville-real-estate-radar";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
