module.exports = {
  title: "Docusaurus",
  url: "https://docusaurus.io",
  baseUrl: "/docs",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: '/',
          path: "docs",
        },
      },
    ],
  ],
};
