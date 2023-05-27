import LastFM from "@/components/LastFM"
import MastodonCard from "@/components/MastodonCard"
import PostCard from "@/components/PostCard"
import { Tab } from "@/components/layout/Tab"
import swiperImagesJson from "@/content/swiperImages.json"
import { ContainerStyle } from "@/utils/define"
import lightenColor from "@/utils/lightenColor"
import clsx from "clsx"
import Link from "next/link"
import React from "react"
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLastfmSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import { SiTrakt } from "react-icons/si"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

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
    icon: <img src="http://bgm.tv/img/ico/bgm_banner.gif" />,
  },
]

export default function Home() {
  const { data: aioData, isLoading } = useSWR(
    "https://aoi-t5mvcipjqq-de.a.run.app",
    fetcher
  )

  return (
    <>
      <section className={clsx("index-swiper overflow-hidden", ContainerStyle)}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          style={{ height: "400px" }}
          className="overflow-hidden h-full"
        >
          {swiperImagesJson.index.map(image => (
            <SwiperSlide key={image.name}>
              <div
                className="h-full w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${image.link})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      <section className={clsx("bg-white p-8 my-4", ContainerStyle)}>
        <PostCard loading={isLoading} post={aioData?.newestPost} />
      </section>

      <section className="my-4 grid xl:grid-cols-2 gap-4">
        <LastFM recentlyListen={aioData?.recentlyListen} loading={isLoading} />
        <MastodonCard loading={isLoading} latestTweet={aioData?.mastodon} />
      </section>

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
        className={clsx("p-6 h-full", ContainerStyle)}
        style={{ backgroundColor: lightenColor(primaryColor, 0.1) }}
      >
        <div
          className="text-3xl leading-3 text-center h-full items-center flex justify-center"
          style={{ color: primaryColor }}
        >
          {icon}
        </div>
      </div>
    </Link>
  )
}
