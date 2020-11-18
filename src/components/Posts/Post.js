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
                        marginLeft: "5px",
                        marginRight: "5px",
                    }} fluid={image.childImageSharp.fluid}/>
      </div>
      <div className="column">
          <p className="post-title logo">
              {title}
          </p>
            <hr  style={{
              color: '#f1eff5',
              backgroundColor: '#f1eff5',
              height: .5,
              borderColor : '#f1eff5'
          }}/>
        <Link to={`/${category}`}>
          <span class="tag is-link">
            {category}
          </span>
        </Link>
          <div className="text-excerpt">
              <p>{excerpt}</p>
          </div>
            <Link to={`/posts/${slug}`}>
              <button className="button-gen button is-primary is-medium">
                <span className="button-items">
                  <strong>CONTINUE READING</strong>
                </span>
              </button>
            </Link>
            
            <hr  style={{
              color: '#f1eff5',
              backgroundColor: '#f1eff5',
              height: .1,
              borderColor : '#f1eff5',
              marginTop:"-5px",
          }}/>

          <div className="time-date">
            <div className="time-post">
              <small>
                <em>
                  {readTime} min read                
                </em>
              </small>
            </div>
            <div className="time-date">
              <div className="date-line">
                
                <MdDateRange size={15} style={{ marginRight:"10px", color:"#000"}}/>
                
                <small>
                  <em>
                    {date}               
                  </em>
                </small>
              </div>
            </div>
          </div>

      </div>
  </div>

  </div>
</div>
    )
}

export default Post
