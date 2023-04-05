import { AppProps } from "next/app"
import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
