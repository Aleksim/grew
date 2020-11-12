import React from "react"

import { FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import "../pages/mystyles.scss"


const Footer = () => {

  return (
    <footer className="footer footer-background">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <div>
                All rights reserved
            </div>
          </div>
          <div className="column">
            <p className="footer-heading">Contact</p>
            <p>Talk to me instantly by joining my discord server</p>
            <a>
              <FaLinkedin className="icon"></FaLinkedin>
            </a>
            <a>
              <FaTwitterSquare className="icon"></FaTwitterSquare>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer