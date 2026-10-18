/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brandalchemy.co.nz',
        pathname: '**',
      },
    ],
  },

  // Yoast generates the XML sitemaps in WordPress; serve them on the public domain.
  async rewrites() {
    return [
      { source: '/sitemap.xml', destination: '/api/sitemap/sitemap_index.xml' },
      { source: '/sitemap_index.xml', destination: '/api/sitemap/sitemap_index.xml' },
      { source: '/:file(.+-sitemap\\d*\\.xml)', destination: '/api/sitemap/:file' },
      { source: '/main-sitemap.xsl', destination: 'https://api.brandalchemy.co.nz/wp-content/plugins/wordpress-seo/css/main-sitemap.xsl' },
    ];
  },
};

export default nextConfig;
