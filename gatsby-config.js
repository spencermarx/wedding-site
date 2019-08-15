module.exports = {
  siteMetadata: {
    title: "Angie & Spencer Marx | Wedding Site",
    author: "Angie and Spencer Marx",
    description: "Wedding site for Angie and Spencer Marx"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angie + Spencer | Wedding Site`,
        short_name: `A+S | Wedding `,
        description: `The wedding site for Angie and Spencer Marx`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#000`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
