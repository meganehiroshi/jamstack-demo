import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsMeganeblog.title} />
    <span>{data.microcmsMeganeblog.date}</span>
    <h1>title:{data.microcmsMeganeblog.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsMeganeblog.content}`,
      }}
    />
    <img src={data.microcmsMeganeblog.mainVisual.url} alt="test" />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsMeganeblog(id: { eq: $id }) {
      meganeblogId
      date
      title
      content
      mainVisual {
        url
      }
    }
  }
`
