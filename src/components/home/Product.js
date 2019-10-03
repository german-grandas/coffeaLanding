import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto-my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="mb-0 text-blue">${product.precio}</h6>
          <button
            className="btn btn-green text-capitalize mt-3 snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.precio}
            data-item-categories={product.variedad}
            data-item-image={product.image.fluid.src}
            data-item-url="http://coffeashop.netlify.com"
            data-item-description={product.descripcion.descripcion}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
