import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const blogposts = data.allMarkdownRemark.edges.map(edge => (
    <li key={edge.node.frontmatter.title}>
      <h2>
        <Link to={`/blog/${edge.node.fields.slug}`}>
          {edge.node.frontmatter.title}
        </Link>
      </h2>
      <p>{edge.node.frontmatter.date}</p>
    </li>
  ))

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{blogposts}</ol>
    </Layout>
  )
}

export default BlogPage
