import { AppProps } from "next/app"
import React from "react"
import Layout from "@/components/layout/Layout"
import "@/styles/index.scss"
import Script from "next/script"

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K4H2QL7D33"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K4H2QL7D33');
        `}
      </Script>
    </Layout>
  )
}

export default App
