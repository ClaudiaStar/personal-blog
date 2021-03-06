import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>
        I am a mama and web developer who loves being creative and helping small
        business with their websites. I love a good challenge.
      </p>
      <p>
        Want to work with me?<Link to="/contact">Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
