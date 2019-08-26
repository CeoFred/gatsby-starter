module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name : 'files',
        path: `${__dirname}/src/markdown`
      }
    },
    'gatsby-transformer-remark'
  ],


}
