"use client"
import React from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function HomeSwiper({
  images,
}: {
  images: { name: string; link: string }[]
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      style={{ height: "400px" }}
      className="overflow-hidden h-full"
    >
      {images.map(image => (
        <SwiperSlide key={image.name}>
          <img
            className="h-full w-full bg-cover bg-no-repeat bg-center"
            src={image.link}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
