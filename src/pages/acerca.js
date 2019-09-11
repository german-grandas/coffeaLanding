import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/home/info"
import Background from "../components/globals/background"


const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Acerca de Coffea Shop" />
    <Background
      className = ".typewriter"
      img={data.img.childImageSharp.fluid}
      title="Acerca de Coffea Shop"
      styleClass="acerca-background"
      textColor = 'text-acerca'
    />
    <Info title="Quienes Somos"/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default SecondPage
