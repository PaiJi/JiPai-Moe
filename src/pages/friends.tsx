import classNames from "classnames"
import React, { useEffect, useState } from "react"
import friendsJson from "../../content/friends.json"
export default function Friends() {
  const [friends, setFriends] = useState<typeof friendsJson>()

  useEffect(() => {
    setFriends(friendsJson)
  }, [])

  return (
    <main className="bg-white p-10">
      <section className="my-8">
        <div className="items-baseline mb-4 ">
          <h2 className="text-2xl text-primary border-b-4 inline-block pb-1">
            朋友们
          </h2>
          <p className="text-sm text-gray-500 block mt-4 mb-8">这里是鸡排在现实/游戏中认识的朋友们。</p>
        </div>

        <ul className="grid md:grid-cols-3 gap-5">
          {friends?.friends && FriendRender(friends?.friends)}
        </ul>
      </section>

      <section className="my-8">
        <div className="items-baseline mb-4">
          <h2 className="text-2xl text-primary inline-block border-b-4 pb-1">
            有点意思
          </h2>
          <p className="mt-4 mb-8 text-sm text-gray-500 block">
            这些是鸡排上网冲浪时觉得超👍的“网友”，虽然他们不认识我，我也偷偷把他们放进这个列表里，希望你也能喜欢。
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-5">
          {friends?.following && FriendRender(friends?.following)}
        </ul>
      </section>

      <section className="my-8 flex justify-center flex-col items-center">
        <span className="text-gray-500 text-base text-center">写给那些在互联网上留下过痕迹，如今却不知身处何方的人儿</span>
        <p  className="text-gray-500 text-lg font-medium">谢谢你，愿你被这世界温柔以待。</p>
      </section>
    </main>
  )
}

function FriendRender(list: typeof friendsJson.friends) {
  return (
    <>
      {list.map(friend => (
        <a
          className="friend-item inline-block bg-white rounded-lg transition duration-200 p-2 flex items-center transform hover:-translate-y-2 outline outline-1 outline-gray-200"
          key={friend.name}
          target="_blank"
          rel="noreferrer"
          href={friend.url}
        >
          {friend.avatar ? (
            <img className="rounded-full w-16 h-16" src={friend.avatar} />
          ) : (
            <div className="rounded-full w-16 h-16 bg-gray-300"></div>
          )}

          <div className="ml-4 px-2 py-2 md:truncate">
            <h2 className="font-bold text-xl text-dark-666 mb-2">
              {friend.name}
            </h2>
            <p
              className={classNames(
                "friend-item-default-intro text-dark-666 text-sm transition duration-400 md:truncate",
                {
                  "friend-slogan-display": friend.intro && friend.slogan,
                }
              )}
            >
              {friend.intro || friend.slogan}
            </p>
            {friend.intro && friend.slogan ? (
              <p className="friend-item-slogan text-dark-666 text-sm transition duration-400">
                {friend.slogan}
              </p>
            ) : null}
          </div>
        </a>
      ))}
    </>
  )
}
