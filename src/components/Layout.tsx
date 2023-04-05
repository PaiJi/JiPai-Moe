import React from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SEO from "@/components/Seo"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <SEO />
      <div className="max-w-screen-xl m-auto px-8 lg:px-0 md:mt-8">
        <div className="flex justify-between">
          <aside className="max-w-xs w-full border-r flex-shrink-0 h-fit sticky md:top-8">
            <Header />
            <Footer />
          </aside>
          <main className="w-full max-w-[850px]">{children}</main>
        </div>
      </div>
    </>
  )
}
