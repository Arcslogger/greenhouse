import URLNav from "@/components/URLNav";
import Tag from "@/components/tag";
import Footer from "@/components/Footer";
import Markdown from "react-markdown";
import { getPlantBySimplifiedSlug } from "@/utils/getContent";
import { getURLSlug } from "@/utils/misc";

// github flavoured markdown (supports tables, strikethrough, footnotes)
import remarkGfm from "remark-gfm";
// add support for more representative line breaks as seen on obsidian
import remarkBreaks from "remark-breaks";

interface IProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: IProps) {
  const plant = getPlantBySimplifiedSlug(params.slug);
  if (!plant) return null;

  const frontmatter = plant.frontmatter;

  return (
    <div className="mx-auto max-w-[90vw] sm:max-w-[70vw] lg:max-w-[48rem] min-h-screen flex flex-col">
      <URLNav routeParts={[frontmatter.title]} />
      <h1 className="text-2xl font-medium italic mt-12 max-w-lg">
        {frontmatter.title}
      </h1>
      <div className="flex mt-2 gap-x-2">
        {frontmatter.tags &&
          frontmatter.tags.map((tag: string) => {
            return <Tag title={tag} key={tag} />;
          })}
      </div>
      <div className="mt-12 prose prose-invert sm:prose-lg max-w-none">
        <Markdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          components={{
            a(props) {
              return (
                <a
                  {...props}
                  href={
                    !props.href?.startsWith("http")
                      ? // format note links
                        props.href?.replace(/\.md$/, "")
                      : // otherwise, display the link as is
                        props.href
                  }
                  className="font-normal text-iris hover:text-violet-600 transition-all"
                />
              );
            },
          }}
        >
          {plant.content}
        </Markdown>
      </div>
      <span className="flex-grow" />
      <Footer />
    </div>
  );
}
