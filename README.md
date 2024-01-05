Greenhouse is the website generator that powers [nursery.wilburzhang.com](https://nursery.wilburzhang.com). It's made using [Next.js](https://nextjs.org/) and a variety of other knick knacks generally following this pipeline:

```
.md
 ├─ markdown body → remark w/plugins via react-markdown → TSX → HTML
 └─ frontmatter (YAML) → gray-matter → JSON
```

It allows notes to be written in markdown using software like [Obsidian](https://obsidian.md), and renders pages underneath dynamic URLs. Because 99% of content uses SSR, the site is generally lightweight and can run with almost no Javascript on the browser. 

Some other features:
- Cross-link between notes that uses a relatively "native" solution via URL encoding
- Supports YAML front-matter (i.e: Obsidian's properties feature)

Features I want to add[^1] :
- Relatively efficient backlinking that gets created at the syntax tree stage (ie, jacky's [Quartz backlinks plugin](https://quartz.jzhao.xyz/advanced/making-plugins))
- Full text search and filtering by tags
- ~~Redoing this entire site in Astro or Gatsby~~

Wallpapers on the landing page are randomly selected from a few artists that I like, then [dithered](https://ditherit.com/) for stylistic preference.

[^1]: heavily dependent on how large this site gets.
