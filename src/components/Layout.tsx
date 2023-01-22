import React from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SEO from '@/components/Seo'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <SEO />
      <div className="max-w-screen-lg m-auto px-8 lg:px-0">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
