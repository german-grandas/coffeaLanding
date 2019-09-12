import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from "../components/home/info"
import Background from "../components/globals/background"

const text = `
  Somos un grupo de personas que ofrece una opción creada para brindar a 
  nuestros clientes un fácil acceso diferentes variedades de cafés. 
  Nos enfocamos en atender los diferentes gustos de nuestros clientes,
  a partir de sus intereses y la información proporcionada por cada uno de los caficultores que forman parte de este proyecto.
  Coffea Shop es una forma de incentivar al consumo de café.
`
const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Acerca de Coffea Shop" />
    <Background
      className=".typewriter"
      img={data.img.childImageSharp.fluid}
      title="Acerca de Coffea Shop"
      styleClass="acerca-background"
      textColor="text-blue"
      typer={false}
    />
    <Info title="Quienes Somos" text={text} showB={false} />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "but-first-coffee.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default SecondPage
