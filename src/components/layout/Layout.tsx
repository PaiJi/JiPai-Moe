import React from "react"
import Header from "@/components/layout/Header"
import SEO from "@/components/layout/Seo"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <SEO />
      <div className="max-w-[480px] xl:max-w-[1600px] m-auto px-6 md:px-8 md:mt-8">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <aside className="mb-6 md:h-fit sticky xl:flex-grow xl:min-w-[400px] top-8 xl:px-6 flex xl:justify-center">
            <Header />
          </aside>
          <main className="bg-white z-10 w-full xl:max-w-[850px] mt-11 md:mt-0">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
