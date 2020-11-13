import React from 'react'
import "../css/main.css"
import "../pages/mystyles.scss"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    car: file(relativePath: { eq: "welcome_to_helsinki.4deafcc7.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chat: file(relativePath: { eq: "consolechat.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weather: file(relativePath: { eq: "secure_local_weather.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Work = () => {
        const data = useStaticQuery(getImages)

        const openInNewTab = (url) => {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null
        }
    return (
        <div className="section work-bg">
            <div className="container">
                    <h2 className="movetocenter work-title">
                        Our work
                    </h2>
                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <Image
                                            className="image box"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.car.childImageSharp.fluid}
                                        />
                                    
                                    </div>
                                        <div className="column">
                                            <h3 className="title is-3">
                                                pointNG - Hyper Secure Location Solution for Web Developers
                                            </h3>
                                            <p className="work-p">
                                                Use pointNG SDK to build GPS-location-based web experiences without privacy risks.
                                            </p>
                                            
                                            <button onClick={()=>{openInNewTab('https://discord.gg/tjyaZDY')}} class="button is-primary is-large"><span><strong>Read more</strong></span></button>
                                        </div>
                                </div>
                            </div>
                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <div className="box">
                                        <Image
                                            className="image"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.chat.childImageSharp.fluid}
                                        />
                                        </div>
                                    
                                    </div>
                                        <div className="column">
                                            <h3 className="title is-3">
                                                ConsoleChat.io - Underground developer meeting room.
                                            </h3>
                                            <p className="work-p">
                                                ConsoleChat turns browsers' console into a global real-time chat that connects developers from websites.                                            
                                            </p>
                                            <p className="work-p">
                                                Support the developer community and let developers from all websites that are using ConsoleChat chat directly on console when using your website!                                            </p>
                                            <button onClick={()=>{openInNewTab('https://www.consolechat.io/')}} class="button is-primary is-large"><span><strong>Read more</strong></span></button>
                                        </div>
                                </div>
                            </div>

                            <div className="grew-container-wide">
                                <div className="columns">
                                    <div className="column">
                                        <Image
                                            className="image box"
                                            style={{
                                                width:"100%",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                            fluid={data.weather.childImageSharp.fluid}
                                        />
                                    
                                    </div>
                                        <div className="column">
                                            <h3 className="title is-3">
                                                Secure Local Weather App
                                            </h3>
                                            <p className="work-p">
                                                Privacy-friendly local weather forecasts. No tracking or transferring of coordinate-data.                                            
                                            </p>
                                            
                                            <button onClick={()=>{openInNewTab('https://gifted-davinci-a1defb.netlify.app/')}} class="button is-primary is-large"><span><strong>Try the Web Prototype</strong></span></button>
                                        </div>
                                </div>

                            </div>
            </div>
        </div>
    )
}

export default Work
