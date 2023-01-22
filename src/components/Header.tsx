import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { FiMenu } from "react-icons/fi"
import Link from "next/link"

const links = [
  {
    linkName: "首页",
    to: "/",
    type: "inSite",
  },
  // {
  //   linkName: "AIO",
  //   to: "/aio/",
  //   type: "inSite",
  // },
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

const Header: React.FC = () => {
  const bodyRef = useRef<HTMLBodyElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    bodyRef.current = document.querySelector("body")
  }, [])

  const handleMenuClick = (openStatus: boolean) => {
    setIsMenuOpen(openStatus)

    if (bodyRef.current) {
      if (openStatus) {
        bodyRef.current.classList.add("stop-scroll")
      } else {
        bodyRef.current.classList.remove("stop-scroll")
      }
    }
  }

  return (
    <header
      className={classNames(
        "flex flex-col justify-between items-center mb-12 md:mt-8"
      )}
    >
      <div
        id="mobile-nav-bar"
        className="md:hidden flex items-center justify-between w-full bg-white py-2 px-4 top-0 fixed z-10 leading-normal"
      >
        <span className="text-xl text-primary">JiPai Store</span>
        <FiMenu className="text-2xl" onClick={() => handleMenuClick(!isMenuOpen)} />
      </div>
      <div
        className={classNames(
          "fixed z-10 mt-11 w-full h-full transition-all duration-200 bg-transparent",
          {
            "bg-gray-400 bg-opacity-25 block": isMenuOpen,
            "modal-background--fade-out": !isMenuOpen,
          }
        )}
        onClick={() => {
          handleMenuClick(false)
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          className={classNames(
            "md:hidden absolute top-0 bg-white h-full right-0 w-48 px-4 py-4 transform transition-all duration-200",
            {
              "translate-x-full": !isMenuOpen,
            }
          )}
        >
          <ul>
            {links.map(link => (
              <li key={link.to} className="mb-4 text-dark-666">
                <LinkRender
                  key={link.to}
                  to={link.to}
                  type={link.type}
                  linkName={link.linkName}
                  isMobile
                  onClick={() => handleMenuClick(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mt-14 lg:mt-0">
        <img
          width={55}
          height={55}
          style={{ borderRadius: "999%", border: "solid 5px white" }}
          src="https://avatars.githubusercontent.com/u/3956400?v=4"
        />
        <div className="flex items-end mt-4">
          <Link to="/" className="text-primary text-5xl font-black mr-2">
            JiPai
          </Link>
          <Link to="/" className="text-primary text-5xl font-bold">
            Store
          </Link>
        </div>
      </div>

      <nav className="mt-4 flex items-center text-dark-666 text-2xl font-black transition-all duration-200 hidden md:block">
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
  isMobile,
  onClick,
}: {
  to: string
  linkName: string
  type: string
  isMobile?: boolean
  onClick?: () => void
}) {
  if (type === "inSite") {
    return (
      <Link
        href={to}
        onClick={onClick}
        // activeClassName={classNames("", {
        //   "nav-active text-primary": !isMobile,
        //   "bg-primary text-white": isMobile,
        // })}
        className={classNames({
          "relative ml-3 font-bold hover:text-primary transition-all duration-200":
            !isMobile,
          "relative font-bold py-2 px-2 rounded block": isMobile,
        })}
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
        onClick={onClick}
        className={classNames({
          "ml-3 hover:text-primary transition-all duration-200": !isMobile,
          "relative font-bold py-2 px-2 rounded inline-block": isMobile,
        })}
      >
        {linkName}
      </a>
    )
  }
}

export default Header
