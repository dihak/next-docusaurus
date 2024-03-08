module.exports = {
  title: "Docusaurus",
  url: "https://docusaurus.io",
  baseUrl: "/",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docusaurus/docs",
        },
        pages: {
          path: "docusaurus/pages",
        }
      },
    ],
  ],
};
