import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel({
  images,
  imgCls,
  slideCls,
}: {
  images: { src: string; name: string }[];
  imgCls?: string;
  slideCls?: string;
}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image) => (
          <div key={image.src} className={clsx("embla__slide", slideCls)}>
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
