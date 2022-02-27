import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Helmet from "react-helmet"
import SEO from "../../components/seo"
import { withPrefix, Link } from "gatsby"


const BlogPage = ({ data }) => (
  <Layout>
    <Helmet>
            <script src={withPrefix('../../../static/js/clova.js')} type="text/javascript" defer />
    </Helmet>
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
