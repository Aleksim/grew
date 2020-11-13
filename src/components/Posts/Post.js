import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import "../../css/main.css"
import { MdDateRange } from "react-icons/md";



const Post = ({ frontmatter, excerpt }) => {

    const { title, image, author, slug, date, category, readTime } = frontmatter
    

    return (
<div className="card post-item">
  <div className="card-content">

    <div className="columns">
      <div className="column">
        <Image style={{
                        width:"50%",
                        marginLeft: "5px",
                        marginRight: "5px",
                    }} fluid={image.childImageSharp.fluid}/>
      </div>
      <div className="column">
          <p className="post-title logo">
              {title}
          </p>
          <span class="tag is-link">{category}</span>
          <p>
            Author: {author}
          </p>

          
          <p>{excerpt}</p>
          
          <div className="columns">
            <div className="column">
              <p>
                Readtime: {readTime} min
              </p>
            </div>
            <div className="column">
              <div className="date-line">
                <MdDateRange size={25} style={{ marginRight:"10px", color:"#000"}}/>
                {date}
              </div>
            </div>
          </div>
          <button className="button-gen button is-primary is-large">
              <span className="button-items">
                <strong>Read More</strong>
              </span>
            </button>

      </div>
  </div>

  </div>
</div>
    )
}

export default Post
