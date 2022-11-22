import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import swiperImagesJson from "../../content/swiperImages.json"

export default function Home() {
  return (
    <main className="my-4">
      <section className="index-swiper shadow my-4 rounded-md overflow-hidden">
        <Swiper modules={[Autoplay]} autoplay={{delay:5000}} className="rounded-md overflow-hidden h-full">
          {swiperImagesJson.index.map(image => (
            <SwiperSlide key={image.name}>
              <div className="h-full w-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image.link})` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="bg-white shadow py-8 px-4 my-4 rounded-md">
        <span className="text-3xl font-bold block text-center text-dark-666 tracking-widest">
          生命之光终将照耀地平线。
        </span>
        <label className="block text-center md:text-right text-gray-102">
          来自·毛玉線圈物語Minecraft
        </label>
      </section>
    </main>
  )
}
