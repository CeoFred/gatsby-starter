import React from 'react'
import {StaticQuery, graphql} from 'gatsby';
import Article from './article';


export default function articlelist() {
    return (
        <StaticQuery 
        query = {
            graphql `
{
    allMarkdownRemark(sort: {fields: [frontmatter___date],order: DESC}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date(formatString: "MMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`
        }

        render = { data => (
            <div>
                {data.allMarkdownRemark.edges.map(({node}) => {
        return <Article to='/'
        date={node.frontmatter.date}
        excerpt={node.excerpt}
        keywords={node.frontmatter.keywords}
         title={node.frontmatter.title} id={node.id}/>
    })}
            </div>
        )}
        />
    )
}
