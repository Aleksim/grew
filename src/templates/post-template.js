import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import Image from 'gatsby-image'

import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date },
      body,
    },
  } = data
  return (
    <Layout>
      <Hero />
        {/*post info*/}
        <section className="container is-max-desktop">
          <div >
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div ></div>
          </div>
          <div className="content">
          <MDXRenderer>{body}</MDXRenderer>
      </div>
        </section>

    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
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
