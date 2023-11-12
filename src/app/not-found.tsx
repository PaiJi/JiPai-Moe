import Link from "next/link"
import React from "react"

const Error404Page = () => (
  <main>
    <h1 className="text-3xl text-slate-600">啊！你似乎来到了没有信号的地方</h1>
    <p className="text-slate-600">请返回再看看别的吧。</p>
    <Link className="mt-2 text-slate-400 hover:text-slate-600 block underline decoration-dotted underline-offset-4" href="/">回首页</Link>
  </main>
)

export default Error404Page
