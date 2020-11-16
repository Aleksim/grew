import React from 'react'
import "../pages/mystyles.scss"


const Nav = () => {
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
      <a className="navbar-item is-active" href="/">
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
