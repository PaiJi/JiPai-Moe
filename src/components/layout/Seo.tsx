import React from "react"
import Head from "next/head"
import config from "src/config"

export default function SEO({
  description,
  title,
}: {
  title?: string
  description?: string
}) {
  const siteTitle = config.title
  const defaultDescription = config.description

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : `${siteTitle}`}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}
