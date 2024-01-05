import Hr from "./Hr";
import webring from "@/../public/webring.svg";
import invertocat from "@/../public/github-mark-white.svg";
import Image from "next/image";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="my-24 text-sm">
      <Hr />
      <div className="flex gap-x-4 mt-4 items-center">
        <p> Wilbur Zhang © 2022 - {date.getFullYear()} </p>
        <span className="flex-grow" />
        <a
          href="https://webring.xxiivv.com/#wilbur"
          target="_blank"
          rel="noopener"
        >
          <Image src={webring} className="w-5" alt="XXIIVV webring" />
        </a>
        <a
          href="https://webring.xxiivv.com/#wilbur"
          target="_blank"
          rel="noopener"
        >
          <Image src={invertocat} className="w-4" alt="XXIIVV webring" />
        </a>
        <a href="https://twitter.com/WilburZhang" className="hover:underline">
          𝕏
        </a>
      </div>
    </footer>
  );
}
