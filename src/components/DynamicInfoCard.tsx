"use client"

import React from "react"
import clsx from "clsx"
import useSWR from "swr"
import PostCard from "./PostCard"
import LastFM from "./LastFM"
import MastodonCard from "./MastodonCard"
import { ContainerStyle } from "@/utils/define"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DynamicInfoCard() {
  const { data: aioData, isLoading } = useSWR(
    "https://aoi-t5mvcipjqq-de.a.run.app",
    fetcher,
  )

  return (
    <>
      <section className={clsx("bg-white p-8 my-4", ContainerStyle)}>
        <PostCard loading={isLoading} post={aioData?.newestPost} />
      </section>

      <section className="my-4 grid xl:grid-cols-2 gap-4">
        <LastFM recentlyListen={aioData?.recentlyListen} loading={isLoading} />
        <MastodonCard loading={isLoading} latestTweet={aioData?.mastodon} />
      </section>
    </>
  )
}
