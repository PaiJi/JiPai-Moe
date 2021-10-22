import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Home() {
  return (
        <main className="my-4">
          <section
            className="shadow my-4 rounded-md overflow-hidden"
          >
            <Swiper className="rounded-md overflow-hidden">
              <SwiperSlide className="">
                <img src="https://qcloud-cdn-static.lonepixel.cn/blog/2018_12_31_kedama.webp" />
              </SwiperSlide>
            </Swiper>
          </section>

          <section className="bg-white shadow py-8 px-4 my-4 rounded-md">
            <span className="text-3xl font-bold block text-center text-dark-666 tracking-widest">
              生命之光终将照耀地平线。
            </span>
            <label className="block text-right text-gray-102">
              来自·毛玉線圈物語Minecraft
            </label>
          </section>
        </main>
  )
}
