import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from "gatsby"
import { GoPerson } from "react-icons/go";
import { FaDiscord, FaTwitter, FaLinkedinIn, FaGithub} from "react-icons/fa"



const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, author},
      body,
    },
  } = data
  return (
    <Layout>
      
        <div className="section">
          <div className="container" >
            {/*image*/}
            <div className="movetocenter">
              <Image className="big-image" style={{
                  
                  marginLeft: "5px",
                  marginRight: "5px",
              }} fluid={image.childImageSharp.fluid}/>
            </div>

            <h2 className="logo">{title}</h2>

            {/*author info*/}
            <div className="upperbanner">
              <div className="">
                <div className="person-name-icon">
                  <h2>Written by {author}</h2>
                </div>
                <div className="category-date">
                  <p style={{marginRight:"10px"}}>
                    {date}
                  </p>
                  <Link to={`/${category}`}>
                    <span class="tag is-link">
                      {category}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="">
                {/*Share functionality later */}
              </div>
            </div>
            <div className="post-template-text">
                <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
        </div>

    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        author
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        readTime
        slug
      }
      body
    }
  }
`



export default PostTemplate
