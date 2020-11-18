import React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2"
import Work from '../components/Work'
import Posts from "../components/Posts"
import {graphql} from "gatsby"
import "./mystyles.scss"
import "../css/main.css"



export default function Home({data}) {
  const {allMdx:{nodes:posts}}=data
  return (
  <Layout>
    <Hero2/>
    <Work/>
  </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
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
