import React from "react"
import "../css/main.css"
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"
import "../pages/mystyles.scss"


const Footer = () => {

  return (
    <footer className="footer footer-background">
      <div className="section has-text-centered">
        <div className="container">
        <div className="columns">
          <div className="column">
              <p><strong>© Grew.</strong></p>
              <a href="https://github.com/Grew-dev/grew-privacy-policy" target="_blank">Privacy Policy</a>
          </div>
          <div className="column">
        <div className="field-body" style={{marginTop:"10px"}}>
          <div className="field has-addons">
            <p className="control">
              <a href="https://twitter.com/Grewdev" target="_blank" class="button">
                  <FaTwitter size={25} style={{ marginRight:"10px", color:"#1DA1F2"}}/>    
                <span>
                  Twitter
                </span>
              </a>
            </p>
            <p className="control">
              <a href="https://www.linkedin.com/company/42470713" target="_blank" class="button">
                  <FaLinkedinIn size={25} style={{ marginRight:"10px", color:"#2867B2"}}/>    
                <span>
                  LinkedIn
                </span>
              </a>
            </p>
            <p className="control">
              <a href="https://github.com/Grew-dev" target="_blank" class="button">
                  <FaGithub size={25} style={{ marginRight:"10px", color:"#000"}}/>    
                <span>
                  Github
                </span>
              </a>
            </p>
          </div>
        </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer