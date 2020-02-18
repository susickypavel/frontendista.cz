import React from "react"
import fetch from "isomorphic-unfetch"
import { NextPage } from "next"

interface Props {
  stars: number
}

const IndexPage: NextPage<Props> = ({ stars }) => {
  return (
    <div>
      <h1>Hello, World! {stars}</h1>
    </div>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js")
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default IndexPage
