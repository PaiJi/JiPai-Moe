import React from "react"
import DynamicInfoCard from "@/components/DynamicInfoCard"
import HomeSwiper from "@/components/HomeSwiper"
import { Tab } from "@/components/layout/Tab"
import swiperImagesJson from "@/content/swiperImages.json"
import { ContainerStyle } from "@/utils/define"
import lightenColor from "@/utils/lightenColor"
import clsx from "clsx"
import Link from "next/link"
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLastfmSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import { SiTrakt } from "react-icons/si"

const SignPosts = [
  {
    href: "https://github.com/PaiJi",
    primaryColor: "#000000",
    icon: <FaGithubSquare />,
  },
  {
    href: "https://twitter.com/jipairamen",
    primaryColor: "#1DA1F2",
    icon: <FaTwitterSquare />,
  },
  {
    href: "https://www.instagram.com/jipai16/",
    primaryColor: "#E1306C",
    icon: <FaInstagramSquare />,
  },
  {
    href: "https://trakt.tv/users/jipai",
    primaryColor: "#d62b20",
    icon: <SiTrakt />,
  },
  {
    href: "https://www.last.fm/user/jipai",
    primaryColor: "#d92323",
    icon: <FaLastfmSquare />,
  },
  {
    href: "http://bgm.tv/user/338144",
    primaryColor: "#F09199",
    icon: <img src="https://bgm.tv/img/ico/bgm_banner.gif" />,
  },
]

export default function Home() {
  return (
    <>
      <section className={clsx("index-swiper overflow-hidden", ContainerStyle)}>
        <HomeSwiper images={swiperImagesJson.index} />
      </section>

      <section className={clsx("bg-white p-8 my-4", ContainerStyle)}>
        <span className="text-3xl font-bold block text-center text-dark-666 tracking-widest">
          生命之光终将照耀地平线。
        </span>
        <label className="block text-center md:text-right text-gray-102">
          来自·毛玉線圈物語Minecraft
        </label>
      </section>

      <Tab />

      <DynamicInfoCard />

      <section className={clsx("my-4 grid grid-cols-3 xl:grid-cols-8 gap-4")}>
        {SignPosts.map(({ href, primaryColor, icon }) => (
          <QuickLink
            key={href}
            href={href}
            primaryColor={primaryColor}
            icon={icon}
          />
        ))}
      </section>
    </>
  )
}

function QuickLink({
  primaryColor,
  icon,
  href,
}: {
  primaryColor: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          "p-6 h-full group transition hover:drop-shadow-2xl",
          ContainerStyle,
        )}
        style={{ backgroundColor: lightenColor(primaryColor, 0.1) }}
      >
        <div
          className="text-3xl leading-3 text-center h-full items-center flex justify-center group-hover:scale-150 transition-all"
          style={{ color: primaryColor }}
        >
          {icon}
        </div>
      </div>
    </Link>
  )
}
