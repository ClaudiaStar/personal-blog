module.exports = {
  siteMetadata: { title: "Claudia Estrada", author: "Claudia Estrada" },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src/` },
    },
    "gatsby-transformer-remark",
  ],
}
