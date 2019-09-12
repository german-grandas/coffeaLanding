import React from "react"
import Title from "./title"

export default function Contact() {
  return (
    <section className="py-5 contact">
      <Title title="Contáctenos" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/gertiven@gmail.com" method="POST">
            {/*name*/}
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Ingrese su nombre"
              />
            </div>
            {/*email*/}
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Ingrese su correo"
              />
            </div>
            {/*descripcion*/}
            <div className="form-group">
              <label htmlFor="descripcion">Déjanos un mensaje</label>
              <textarea
                name="descripcion"
                id="descripcion"
                className="form-control"
                rows="5"
                placeholder="Escribe tu mensaje."
              />
            </div>
            {/*submit*/}
            <button
              type="submit"
              className="btn btn-green btn-block text-capitalize mt-5"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
