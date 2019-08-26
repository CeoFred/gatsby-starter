import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => (
    <Layout>
        <div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?)' + data.markdownRemark.frontmatter.keywords }}>

            </div>
            <div dangerouslySetInnerHTML={{ ___html: data.markdownRemark.frontmatter.html }} />
        </div>
    </Layout>
)


export const query = graphql`
query($slug: String!){
    MarkdownRemark(fields: { slug: { eq: $slug } }){
      html
    frontmatter {
            title
            keywords
    }
  }
}
`