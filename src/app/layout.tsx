import React from "react"
import Header from "@/components/layout/Header"
import "@/styles/index.scss"
import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hans">
      <body>
        <div className="max-w-[480px] xl:max-w-[1600px] m-auto px-6 md:mt-8">
          <div className="flex flex-col xl:flex-row xl:justify-between">
            <aside className="mb-6 md:h-fit sticky xl:flex-grow xl:min-w-[400px] top-8 xl:px-6 flex xl:justify-center">
              <Header />
            </aside>
            <main className="bg-white z-10 w-full xl:max-w-[850px] mt-11 md:mt-0">
              {children}
            </main>
          </div>
        </div>
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
      </body>
    </html>
  )
}
