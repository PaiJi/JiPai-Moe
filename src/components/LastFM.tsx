import clsx from "clsx"
import React from "react"
import { ContainerStyle } from "@/utils/define"
import Loading from "@/components/Loading"
import Link from "next/link"
import { LastFM as ILastFM } from "@/types/api"

export default function LastFM({
  recentlyListen,
  loading,
}: {
  loading: boolean
  recentlyListen: ILastFM
}) {
  if (loading || !recentlyListen) {
    return (
      <div
        className={clsx(
          "text-right bg-red-100 flex justify-between",
          ContainerStyle
        )}
      >
        <Loading />
      </div>
    )
  }
  return (
    <Link
      href={recentlyListen.recenttracks.track[0].url}
      className={clsx(
        "text-right bg-red-100 flex justify-between",
        ContainerStyle
      )}
    >
      <div className="p-4 flex-shrink-0">
        <img
          className="h-full"
          src={recentlyListen?.recenttracks?.track[0]?.image[2]["#text"]}
        />
      </div>
      <div className="flex flex-col justify-between p-4 text-gray-400 overflow-hidden">
        <span className="text-xs">Recently Listening</span>
        <div>
          <h3 className="truncate text-slate-600">
            {recentlyListen?.recenttracks?.track[0].name}
          </h3>
          <p className="text-xs truncate text-slate-400">
            {recentlyListen?.recenttracks?.track[0].album["#text"]}
          </p>
        </div>
      </div>
    </Link>
  )
}
