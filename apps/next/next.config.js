/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@public-assembly/dao-utils'])

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(md|mdx)?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    })
    return config
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = withTM(nextConfig)
