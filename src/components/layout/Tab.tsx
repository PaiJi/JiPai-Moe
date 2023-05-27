import clsx from "clsx"
import Link from "next/link"
import React from "react"

export function Tab() {
  const LinkCommonClassName =
    "p-8 text-center rounded-2xl flex items-center justify-center"
  return (
    <div className="grid grid-cols-3 my-4 gap-4 text-dark-666">
      <Link href="/labs" className={clsx("bg-blue-100", LinkCommonClassName)}>
        Labs
      </Link>
      <Link href="/friends" className={clsx("bg-red-100", LinkCommonClassName)}>
        Friends
      </Link>
      <Link
        href="/about"
        className={clsx("bg-yellow-100", LinkCommonClassName)}
      >
        About Me
      </Link>
    </div>
  )
}
