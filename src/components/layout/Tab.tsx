import clsx from "clsx"
import Link from "next/link"
import React from "react"
import { ImLab } from "react-icons/im"
import { FaUserFriends } from "react-icons/fa"
import { CgSmile, CgPen, CgSmartphoneChip, CgTimelapse } from "react-icons/cg"

export function Tab() {
  const tabs = [
    {
      text: "实验室",
      href: "/labs",
      icon: <ImLab />,
      primaryColor: "bg-blue-100",
    },
    {
      text: "朋友们",
      href: "/friends",
      icon: <FaUserFriends />,
      primaryColor: "bg-emerald-100",
    },
    {
      text: "配料表",
      href: "/about",
      icon: <CgSmile />,
      primaryColor: "bg-sky-100",
    },
    {
      text: "博客",
      href: "https://blog.jipai.moe",
      icon: <CgPen />,
      primaryColor: "bg-rose-100",
    },
    {
      text: "知识库",
      href: "https://knowledgebase.jipai.moe",
      icon: <CgTimelapse />,
      primaryColor: "bg-violet-100",
    },
    {
      text: "状态",
      href: "https://status.jipai.moe",
      icon: <CgSmartphoneChip />,
      primaryColor: "bg-indigo-100",
    },
  ]
  return (
    <div className="grid grid-cols-3 my-4 gap-4 text-dark-666">
      {tabs.map(({ text, href, icon, primaryColor }) => (
        <TabItem
          key={href}
          href={href}
          primaryColor={primaryColor}
          icon={icon}
          text={text}
        />
      ))}
    </div>
  )
}

function TabItem({
  text,
  icon,
  href,
  primaryColor,
}: {
  text: string
  href: string
  primaryColor: string
  icon: React.ReactNode
}) {
  const LinkCommonClassName =
    "py-6 px-4 text-center rounded-2xl flex items-center justify-center text-sm"
  return (
    <Link
      href={href}
      className={clsx(
        "group transition ease-in-out duration-300 hover:bg-primary-light border border-transparent hover:border-slate-200 hover:drop-shadow-md default-box-shadow",
        primaryColor,
        LinkCommonClassName
      )}
    >
      <i className="mr-2 group-hover:animate-bounce">{icon}</i>
      {text}
    </Link>
  )
}
