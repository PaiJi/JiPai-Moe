import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { FiMenu } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/router"

const links = [
  {
    linkName: "首页",
    to: "/",
    type: "inSite",
  },
  {
    linkName: "配料表",
    to: "/about",
    type: "inSite",
  },
  {
    linkName: "实验室",
    to: "/labs",
    type: "inSite",
  },
  {
    linkName: "朋友们",
    to: "/friends",
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
  return (
    <header
      className={classNames("flex flex-col md:flex-row1 justify-between")}
    >
      <div className="hidden md:flex flex-row items-center justify-between p-4 rounded-full md:mt-0 mt-16">
        <div className="rounded-full overflow-hidden">
          <img
            width={200}
            height={200}
            src="https://avatars.githubusercontent.com/u/3956400?v=4"
          />
        </div>
      </div>

      <div className="my-4 hidden md:block">
        <Link href="/" className="text-white text-5xl font-black text-gray-700">
          JiPa<span className="text-red-400">i</span>
        </Link>
        <p>27 yo.</p>
        <p>Web Developer.</p>
      </div>

      <nav className="mt-8 hidden flex flex-col items-start text-dark-666 text-2xl font-black transition-all duration-200 md:flex">
        {links.map(link => (
          <LinkRender
            key={link.to}
            to={link.to}
            type={link.type}
            linkName={link.linkName}
          />
        ))}
      </nav>

      <MobileMenu />
    </header>
  )
}

function MobileMenu() {
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
    <>
      <div
        id="mobile-nav-bar"
        className="md:hidden flex items-center justify-between w-full bg-white py-2 px-4 top-0 fixed z-10 leading-normal"
      >
        <span className="text-xl text-primary">JiPai Store</span>
        <FiMenu
          className="text-2xl"
          onClick={() => handleMenuClick(!isMenuOpen)}
        />
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
    </>
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
  const router = useRouter()

  if (type === "inSite") {
    return (
      <Link
        href={to}
        onClick={onClick}
        className={classNames({
          "relative mb-3 font-bold transition-all duration-200": !isMobile,
          "hover:text-primary": !isMobile && router.asPath !== to,
          "relative font-bold py-2 px-2 rounded block": isMobile,
          "text-primary": !isMobile && router.asPath === to,
          "bg-primary text-white": isMobile && router.asPath === to,
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
          "mb-3 hover:text-primary transition-all duration-200":
            !isMobile,
          "relative font-bold py-2 px-2 rounded inline-block": isMobile,
        })}
      >
        {linkName}
      </a>
    )
  }
}

export default Header
