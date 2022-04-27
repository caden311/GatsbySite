import React from "react"
import { graphql } from "gatsby"
import style from "./blogTemplate.module.scss"
import Img from 'gatsby-image'

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <article className={style.blog}>
      <Img className={style.img} fluid={frontmatter.avatar.childImageSharp.fluid} />
      <h1 className={style.title}>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
`
