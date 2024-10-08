export default {
  logo: <span>Noraneko Docs</span>,
  project: {
    link: 'https://github.com/nyanrus/noraneko'
  },
  // ... other theme options
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: "ja-JP", text: "日本語"}
  ],
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
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
