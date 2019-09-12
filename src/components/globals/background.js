import React from "react"
import BackgroundImage from "gatsby-background-image"
import Typist from "react-typist"

export default function Background({
  img,
  styleClass,
  title,
  children,
  textColor,
  typer,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      {typer ? (
        <Typist>
          <span
            className={`title pacifico text-uppercase ${textColor} text-center display-4  font-weight-bold `}
          >
            {" "}
            Somos Aroma{" "}
          </span>
          <Typist.Backspace count={6} delay={200} />
          <span
            className={`title pacifico text-uppercase ${textColor} text-center display-4  font-weight-bold `}
          >
            Fragancia{" "}
          </span>
          <Typist.Backspace count={10} delay={200} />
          <span
            className={`title pacifico text-uppercase ${textColor} text-center display-4  font-weight-bold `}
          >
            {" "}
            Cuerpo{" "}
          </span>
          <Typist.Backspace count={7} delay={200} />
          <span
            className={`title pacifico text-uppercase ${textColor} text-center display-4  font-weight-bold `}
          >
            {" "}
            Diversidad{" "}
          </span>
          <Typist.Backspace count={11} delay={200} />
          <span
            className={`title text-uppercase ${textColor} text-center display-4  font-weight-bold `}
          >
            {" "}
            Coffea Shop{" "}
          </span>
        </Typist>
      ) : (
        <h1
          className={`title text-uppercase ${textColor} text-center display-4  font-weight-bold `}
        >
          {title}
        </h1>
      )}
      {children}
    </BackgroundImage>
  )
}

Background.defaultProps = {
  title: "default",
  styleClass: "default-background",
  textColor: "text-white",
  typer: true,
}
