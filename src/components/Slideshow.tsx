import { wallpapers } from "@/utils/constants";
import Image from "next/image";

const Slideshow = async () => {
  const root = process.cwd();
  const imageData = wallpapers[Math.floor(Math.random() * wallpapers.length)];

  return (
    <figure className="flex flex-col space-y-2">
      <Image src={imageData.src} alt={""} className="rounded-md opacity-90" />
      <figcaption className="italic text-sm text-dimmer hover:underline w-fit">
        <a href={imageData.href} target="_blank">
          {imageData.artist}
        </a>
      </figcaption>
    </figure>
  );
};

export default Slideshow;
