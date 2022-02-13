import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsMeganeblog.title} />
    <span>{data.microcmsMeganeblog.date}</span>
    <h1>{data.microcmsMeganeblog.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsMeganeblog.content}`,
      }}
    />
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
    }
  }
`
