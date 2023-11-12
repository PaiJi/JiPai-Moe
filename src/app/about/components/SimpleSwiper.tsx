"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"

export default function SimpleSwiper({ images }: { images: string[] }) {
  return (
    <Swiper
      className=""
      spaceBetween={0}
      slidesPerView={2}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          <img
            className="w-full object-cover brightness-75"
            style={{ height: 300 }}
            src={image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
