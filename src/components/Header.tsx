import React from "react"
import { Link } from "gatsby"

const Header: React.FC = () => {
  const links = [
    {
      linkName: "配料表",
      to: "/about/",
      type: "inSite",
    },
    {
      linkName: "实验室",
      to: "/labs/",
      type: "inSite",
    },
    {
      linkName: "朋友们",
      to: "/friends/",
      type: "inSite",
    },
    {
      linkName: "最爱",
      to: "/fav/",
      type: "inSite",
    },
    {
      linkName: "生产日志",
      to: "https://blog.jipai.moe/",
      type: "outSite",
    },
    {
      linkName: "车间状态",
      to: "https://status.jipai.moe/",
      type: "outSite",
    },
  ]
  return (
    <header className="flex justify-between items-end">
      <div className="flex items-end">
        <Link
          to="/"
          className="text-primary text-5xl font-black mr-2"
        >
          JiPai
        </Link>
        <Link to="/" className="text-primary text-5xl font-bold">
          Store
        </Link>
      </div>
      <nav className="flex items-center text-dark-666 text-2xl font-bold transition-all duration-200">
        {links.map(link => (
          <LinkRender
            key={link.to}
            to={link.to}
            type={link.type}
            linkName={link.linkName}
          />
        ))}
      </nav>
    </header>
  )
}

function LinkRender({
  to,
  linkName,
  type,
}: {
  to: string
  linkName: string
  type: string
}) {
  if (type === "inSite") {
    return (
      <Link
        to={to}
        activeClassName="nav-active text-primary"
        className="relative ml-3 font-bold hover:text-primary transition-all duration-200"
      >
        {linkName}
      </Link>
    )
  } else {
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className="ml-3 hover:text-primary transition-all duration-200"
      >
        {linkName}
      </a>
    )
  }
}

export default Header
