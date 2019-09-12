import React from "react"
import { Link } from "gatsby"

import Title from "./title"
export default function Info({ title, text, showB }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={title} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">{text}</p>
            {showB ? (
              <Link to="/acerca">
                <button className="btn text-uppercase btn-green">
                  Acerca de
                </button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

Info.defaultProps = {
  title: "Nuestra Historia",
  text: `Coffea Shop nace como un emprendimiento con el cual quiere aumentar el interés, 
  consumo y fácil acceso de café de distintas variedades. Siendo originarios de Colombia, 
  segundo país productor de café, nos enfrentamos con la idea de que “Los colombianos no sabemos consumir café”, 
  teniendo en cuenta que estamos ubicados en el eje cafetero y dicha ideología sirve como eslabón 
  para la realización de Coffea Shop, una plataforma web que permita conocer los orígenes y 
  las características de los diferentes cafés de varias localidades. La iniciativa pretende facilitar 
  la comunicación entre los caficultores y los consumidores expertos y a las nuevas 
  generaciones que se empiezan a interesar en el campo del café, sus beneficios y 
  sus diferentes composiciones.
  `,
  showB: true,
}
