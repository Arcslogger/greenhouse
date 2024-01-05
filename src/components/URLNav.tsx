import Link from "next/link";
import URLSlash from "./URLSlash";
import Hr from "./Hr";

interface IProps {
  routeParts: string[];
}

export default function URLNav({ routeParts }: IProps) {
  return (
    <div className="mt-8">
      <div className="flex gap-x-2 italic">
        <Link
          href="https://wilburzhang.com"
          className="hover:text-violet-600 transition-all"
        >
          ~
        </Link>
        <URLSlash />
        <Link
          href="/"
          className="text-iris hover:text-violet-600 transition-all"
        >
          nursery
        </Link>
        {routeParts.map((routePart, index) => {
          const fullPath = routeParts.slice(0, index + 1).join("/");
          return (
            <>
              <URLSlash />
              <Link
                // url encoding used in getURLSlug ensures spaces are handled fine
                href={`/${fullPath}`}
                className="hover:text-violet-600 transition-all truncate max-w-[10rem] sm:max-w-[20rem]"
                key={index}
              >
                {routePart}
              </Link>
            </>
          );
        })}
      </div>
      <Hr />
    </div>
  );
}
