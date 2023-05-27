import React from "react"
import { AiOutlineLoading } from "react-icons/ai"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <AiOutlineLoading className="animate-spin text-2xl" />
    </div>
  )
}
