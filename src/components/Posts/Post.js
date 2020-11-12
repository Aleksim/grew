import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import "../../css/main.css"


const Post = ({ frontmatter, excerpt }) => {

    const { title, image, slug, date, category, readTime } = frontmatter

    return (
<div className="card post-item generic-background">
  <div className="card-content">
    <p className="post-title">
        {title}
    </p>

    <div className="content">
    <p>{excerpt}</p>
    
    </div>
    <footer class="card-footer" style={{borderColor: "#626262"}}>
    <p class="card-footer-item" style={{borderColor: "#626262"}}>
      <span>
               <Link to={`/posts/${slug}`} className="link-style">
          continue reading 
        </Link>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Published {date}
      </span>
    </p>
  </footer>
  </div>
</div>
    )
}

export default Post
