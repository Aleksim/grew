import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import {graphql} from 'gatsby'


const CategoryTemplate = (props) => {

    const {pageContext:{category}}=props
    const {data:{categories:{nodes:posts}}} = props

    return (
        <Layout>
          <div className="hero hero-color ">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h2 className="logo">
                  #{category}   
                </h2>
              </div>
            </div>
        </div>
            <Posts posts={posts} title={`category / ${category}`}/>
        </Layout>
    )
}

export const query= graphql`
query GetCategories($category: String) {
  categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
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
            fluid {
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

export default CategoryTemplate
