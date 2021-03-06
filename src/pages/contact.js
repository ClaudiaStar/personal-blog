import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <p>Phone: 503-503-5035</p>
      <p>Email: claudia@claudia.com</p>
      <p>
        Twitter:
        <a
          href="https://twitter.com/mamaCodes8"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mamaCodes8
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
