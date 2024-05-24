import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel({
  images,
  imgCls,
  slideCls,
}: {
  images: { src: string; name: string }[];
  imgCls?: string;
  slideCls?: string;
}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image) => (
          <div className={clsx("embla__slide", slideCls)}>
            <img
              className={clsx("object-cover w-full overflow-hidden", imgCls)}
              src={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
