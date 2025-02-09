
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://oss-llmops-stack.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    additionalPaths: async (config) => [{
        loc: '/',
        priority: 1,
        changefreq: 'daily',
        lastmod: new Date().toISOString()
    }],
    outDir: "out",
    exclude: [
        // Exclude _meta files
        '*/_meta',
        '/events/*'
    ],
}