import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function Background({ img, styleClass, title, children, textColor }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className={`title text-uppercase ${textColor} text-center display-4  font-weight-bold `}>
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

Background.defaultProps = {
  title: "default",
  styleClass: "default-background",
  textColor : 'text-white'
}
