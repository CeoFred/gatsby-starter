import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby';

export default function header() {
    return (
        <StaticQuery 
        query={graphql `query {
            site {
                siteMetadata{
                  title
                }
              }
        }`}
        render={ data => (
            <div>
            <header>
                <div>
                    <h1>{data.site.siteMetadata.title}</h1>
                <Link to='/'>Home</Link>
                </div>
                    {' '}
                <div>
                <Link to='/about'>About Us</Link>
                </div>
                
            </header>
        </div>
    )
    }
        />
        
    )
}
