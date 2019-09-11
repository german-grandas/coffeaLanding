import React from "react"
import { Link } from "gatsby"

import Title from "./title"
export default function Info({title}) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={title} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              quisquam, porro voluptate laboriosam debitis maxime totam illum
              qui officia reprehenderit expedita repellat! Ut ullam inventore
              eveniet mollitia? Odit, temporibus! Magni veritatis blanditiis
              quos unde perspiciatis impedit debitis doloribus a odit
              perferendis, ipsa officia accusantium consectetur recusandae,
              repellat eius earum labore.
            </p>
            <Link to="/acerca">
              <button className="btn text-uppercase btn-green">
                Acerca de
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

Info.defaultProps = {
  title: "Nuestra Historia",
}
