import React from "react"
import favJson from "../../content/fav.json"
import clsx from "clsx";

export default function Fav() {
  return (
    <main className="my-5">
      <section className="my-4">
        <h2 className="text-xl text-primary mb-4 pb-1 inline-block border-b-4">
          观望中
        </h2>
        <ul className="grid grid-cols-4  gap-6">
          {favJson.games.incoming.map(item => FavItem(item))}
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl text-primary font-medium mb-4 pb-1 inline-block border-b-4">
          还会再玩
        </h2>
        <ul className="grid grid-cols-4 row-span-full gap-6">
          {favJson.games.playing.map(item => FavItem(item))}
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl text-primary font-medium mb-4 pb-1 inline-block border-b-4">
          其实没怎么玩
        </h2>
        <ul className="grid grid-cols-4 gap-6">
          {favJson.games.holding.map(item => FavItem(item))}
        </ul>
      </section>
    </main>
  )
}

function FavItem(item: { name: string; cover: string; url?: string }) {
  return (
    <div
      onClick={() => (item.url ? window.open(item.url) : null)}
      className={clsx("w-full bg-cover rounded shadow-lg duration-200 transform hover:-translate-y-2 hover:shadow-2xl", {
        "cursor-pointer": item.url,
      })}
      key={item.name}
      style={{
        height: 350,
        width: "100%",
        backgroundImage: `url(${item.cover})`,
        backgroundPosition: "center",
      }}
    ></div>
  )
}
