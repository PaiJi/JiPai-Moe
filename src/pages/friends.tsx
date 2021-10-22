import React, { useEffect, useState } from "react"
import friendsJson from "../../content/friends.json"
export default function Friends() {
  const [friends, setFriends] = useState<typeof friendsJson>()

  useEffect(() => {
    setFriends(friendsJson)
  }, [])

  return (
    <main className="my-5">
      <section className="my-4">
        <div className="flex justify-between items-baseline mb-4 ">
          <h2 className="text-2xl text-primary border-b-4 inline-block pb-1">
            朋友们
          </h2>
          <span className="text-sm text-gray-500 block">谢谢你们曾经来过</span>
        </div>

        <ul className="grid grid-cols-3 gap-5">
          {friends?.friends && FriendRender(friends?.friends)}
        </ul>
      </section>

      <section className="my-8">
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-2xl text-primary inline-block border-b-4 pb-1">
            大佬们
          </h2>
          <span className="ml-4 text-sm text-gray-500 block">
            这些人超👍的，虽然不认识我，但是我相信你也感兴趣！
          </span>
        </div>

        <ul className="grid grid-cols-3 gap-5">
          {friends?.following && FriendRender(friends?.following)}
        </ul>
      </section>
    </main>
  )
}

function FriendRender(
  list: { name: string; avatar: string; intro: string; url: string }[]
) {
  return (
    <>
      {list.map(friend => (
        <a
          className="friend-item inline-block bg-white rounded-lg transition duration-200 p-2 flex items-center transform hover:-translate-y-2"
          key={friend.name}
          href={friend.url}
        >
          {friend.avatar ? (
            <img className="rounded-full w-16 h-16" src={friend.avatar} />
          ) : (
            <div className="rounded-full w-16 h-16 bg-gray-300"></div>
          )}

          <div className="ml-4 px-2 py-2">
            <h2 className="font-bold text-xl text-dark-666 mb-2">
              {friend.name}
            </h2>
            <p className="text-dark-666 text-sm">{friend.intro}</p>
          </div>
        </a>
      ))}
    </>
  )
}
