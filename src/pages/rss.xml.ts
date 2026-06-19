import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL }) {
  const posts = (await getCollection("news"))
    .filter((entry) => entry.data.status === "published")
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: "TaMTAS project news",
    description:
      "Updates, events and research progress from the TaMTAS project.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.publishedAt,
      link: `/news#${post.id}`,
    })),
  });
}
