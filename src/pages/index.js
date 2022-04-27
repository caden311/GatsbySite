import React from "react"
import { graphql, Link } from "gatsby"
import style from "./index.module.scss"
import Img from 'gatsby-image'

import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data);
  return (
    <div>
      <SEO  title="Caden Blog" />
      <div className={style.title}>Caden Blog</div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={style.container} key={node.id}>
          <Img className={style.img} fluid={node.frontmatter.avatar.childImageSharp.fluid} />
          <h2>
            <Link to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>{node.frontmatter.author}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}


export default IndexPage


export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            author
            path
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 250) {
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
