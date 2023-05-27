import clsx from "clsx"
import React from "react"
import Loading from "@/components/Loading"
import { ContainerStyle } from "@/utils/define"
import { Mastodon } from "@/types/api"

export default function MastodonCard({
  latestTweet,
  loading,
}: {
  loading: boolean
  latestTweet: Mastodon
}) {
  if (loading || !latestTweet) {
    return (
      <div
        className={clsx(
          "h-full p-4 bg-sky-100 text-white1 text-dark-666 flex flex-col",
          ContainerStyle
        )}
      >
        <Loading />
      </div>
    )
  }
  return (
    <div
      className={clsx(
        "h-full p-4 bg-sky-100 text-white1 text-dark-666 flex flex-col",
        ContainerStyle
      )}
    >
      <div className="flex mb-4">
        <div className="w-[60px] h-[60px] rounded-xl overflow-hidden">
          <img className="h-full" src={latestTweet.account.avatar} />
        </div>
        <div className="ml-4">
          <h3 className="text-xl mb-0 leading-none">
            {latestTweet.account.display_name}
          </h3>
          <a
            href="https://acg.mn/@jipai"
            className="leading-none text-neutral-600 text-sm block"
          >
            @{latestTweet.account.username}
          </a>
        </div>
      </div>
      <p
        className="flex-grow"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: latestTweet?.content }}
      />
      <a
        className="text-sm text-right mt-4 text-gray-400"
        href={latestTweet?.url || "https://acg.mn/@jipai"}
      >
        {new Date(latestTweet.created_at).toLocaleString()}
      </a>
    </div>
  )
}
