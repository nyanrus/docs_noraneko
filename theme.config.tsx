import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const config = useConfig();

    const finalTitle = `${config.title} | Noraneko Docs`
    return (
      <>
        <title>{finalTitle}</title>
      </>
    );
  },
  logo: <span>Noraneko Docs</span>,
  project: {
    link: 'https://github.com/nyanrus/noraneko'
  },
  // ... other theme options
  i18n: [
    { locale: 'en-US', name: 'English' },
    { locale: "ja-JP", name: "日本語"}
  ],
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/nyarus" target="_blank">
          Nyanrus
        </a>
        .
      </span>
    )
  }
} 
export default config