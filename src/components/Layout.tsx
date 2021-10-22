import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./Seo"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <SEO />
      <div className="max-w-screen-lg m-auto mt-8">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}