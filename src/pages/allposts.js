import React from 'react'
import Hero3 from "../components/Hero3"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import {graphql} from 'gatsby'

const postsPage = ({data}) => {
    const {allMdx:{nodes:posts}}=data
    return (
  <Layout>
    <Hero3/>
    <Posts posts={posts} title="All Posts" />
  </Layout>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, Y")
          slug
          readTime
          image {
            childImageSharp {
              fluid (maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default postsPage
