import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import "../pages/mystyles.scss"

import Navlinks from "../constants/Navlinks"

const getLogo = graphql`
  {
    fixed: file(relativePath: { eq: "umadfav.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Nav = () => {
  const data = useStaticQuery(getLogo)
    return (

    <nav className="navbar">
<div className="container">
  <div className="navbar-brand">

    <span className="navbar-burger burger" data-target="navbarMenuHeroA" onClick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
  <div id="navbarMenuHeroA" className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item is-active">
          home
      </a>
      <a className="navbar-item" href="/posts">
          blog
      </a>
      <a className="navbar-item">
          us
      </a>
    </div>

  </div>
</div>
    </nav>
    )
}

export default Nav
