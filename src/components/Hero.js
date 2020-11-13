import React from 'react'
import "../css/main.css"
import "../pages/mystyles.scss"
 

const Hero = () => {
    return (
<div className="hero section hero-color showborder">
  <div className="hero-body">
    <div className="container has-text-centered">
    <h2 className="logo">
      Latest content.
    </h2>
      <div class="field">
  <div class="control">
    <input className="input is-medium" type="text" placeholder="Search"></input>
  </div>
</div>
    </div>
  </div>
</div>

    )
}

export default Hero
