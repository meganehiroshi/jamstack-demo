import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allMicrocmsMeganeblog.edges.map(({ node }) => (
        <li key={node.meganeblogId}>
          <Link to={`/blog/${node.meganeblogId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsMeganeblog {
      edges {
        node {
          meganeblogId
          title
        }
      }
    }
  }
`
