import React from "react"
import { AiOutlineLoading } from "react-icons/ai"

export default function PostCard({
  post,
  loading,
}: {
  loading: boolean
  post: { link: string; name: string; date: string }
}) {
  if (loading || !post) {
    return (
      <div className="flex items-center justify-center">
        <AiOutlineLoading className="animate-spin" />
      </div>
    )
  }
  return (
    <a
      referrerPolicy="no-referrer"
      className="flex flex-col-reverse xl:flex-row xl:items-center justify-between"
      href={post.link}
    >
      <h2 className="text-2xl text-gray-500 hover:underline">{post.name}</h2>
      <div className="flex-shrink-0 flex flex-col xl:block mb-2 xl:mb-0">
        <div className="text-xs text-gray-400 ">最新博客</div>
        <span className="text-xs text-gray-400 inline-block">
          {new Date(post.date).toLocaleString()}
        </span>
      </div>
    </a>
  )
}
