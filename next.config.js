import nextra from "nextra"

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({
  i18n: {
    locales: ['en-US', "ja-JP"],
    defaultLocale: 'en-US'
  },
  images: {
    unoptimized: true,
  },
})