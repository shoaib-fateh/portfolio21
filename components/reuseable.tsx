import { socialMedia } from "@/data";
import Image from "next/image";

export const SocialMedia = () => (
  <>
    {socialMedia.map((info) => (
      <a href={info.url}>
        <div
          key={info.id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <Image src={info.img} alt="icons" width={20} height={20} />
        </div>
      </a>
    ))}
  </>
);
