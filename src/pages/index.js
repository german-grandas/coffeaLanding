import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/background"
import Info from "../components/home/info"
import Contact from "../components/home/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `tienda de cafe`,
        `cafe`,
        `café de colombia`,
        `productores de café colombianos`,
        `venta directa de café colombiano`,
      ]}
    />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Coffea Shop"
      styleClass="default-background"
      textColor="text-white"
    />
    <Info />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "000534080W.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default IndexPage
