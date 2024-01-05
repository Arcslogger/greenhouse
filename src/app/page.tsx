import Link from "next/link";
import URLNav from "@/components/URLNav";
import { getSortedPlantsByDate } from "@/utils/getContent";
import Hr from "@/components/Hr";
import { getURLSlug } from "@/utils/misc";
import Tag from "@/components/tag";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import FeelingLucky from "@/components/FeelingLucky";
import Slideshow from "@/components/Slideshow";

export default async function Page() {
  const plants = getSortedPlantsByDate().filter(
    (plant) => !plant.frontmatter.unlisted
  );

  return (
    <div className="mx-auto max-w-[90vw] sm:max-w-[70vw] lg:max-w-[48rem]">
      <URLNav routeParts={[""]} />
      <hgroup className="space-y-8 mt-8">
        <Slideshow />
        <h1 className="text-2xl font-medium italic mt-12">
          the plant nursery 🪸
        </h1>
        <p>
          Nursery is a collection of rough writings – not quite a blog, yet also
          not a full <a href="">digital garden</a> (though I hope for it to turn
          into one someday).
        </p>
        <div className="flex space-x-8 text-iris">
          <span className="flex group">
            <Link className="group-hover:underline" href="/colophon">
              colophon
            </Link>
            <ArrowRightIcon className="ml-2 w-3.5 cursor-pointer" />
          </span>
          <FeelingLucky plants={plants} />
        </div>
      </hgroup>
      <h2 className="italic font-medium mt-16"> Recently sprouted</h2>
      <Hr />
      <div className="flex flex-col">
        {plants.map((plant) => {
          return (
            <div key={plant.frontmatter.title} className="mt-6">
              <div className="flex flex-col space-y-1 md:flex-row md:space-x-2 md:space-y-0 flex-wrap">
                <span className="text-dimmer italic">
                  {plant.frontmatter.date!}
                </span>
                <Link
                  href={`/${getURLSlug(plant.frontmatter.title)}`}
                  passHref
                  className="hover:underline max-w-xs md:max-w-md md:truncate"
                >
                  {plant.frontmatter.title}
                </Link>
                <span className="sm:flex-grow" />
                <div className="flex gap-x-1">
                  {plant.frontmatter.tags &&
                    plant.frontmatter.tags.map((tag: string) => {
                      return <Tag title={tag} key={tag} />;
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
