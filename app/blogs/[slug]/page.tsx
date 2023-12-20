import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import fs from "fs";

import "highlight.js/styles/atom-one-dark.css";

import Mdx from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string;
  };
}

const PostsPage = async ({ params: { slug } }: PostProps) => {
  try {
    const postFile = fs.readFileSync(`content/posts/${slug}.mdx`);

    const source = await serialize(postFile, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    });
    return (
      <div className="prose dark:prose-invert py-8">
        <h1 className="text-center">
          {(source.frontmatter as Record<string, string>).title}
        </h1>
        <Mdx {...source} />
      </div>
    );
  } catch {
    notFound();
  }
};

export default PostsPage;

async function getPostBySlug(slug: string) {
  const postFile = fs.readFileSync(`content/posts/${slug}.mdx`);

  const source = await serialize(postFile, { parseFrontmatter: true });

  return source;
}

export async function generateMetadata({ params }: PostProps) {
  const { frontmatter } = await getPostBySlug(params.slug);
  return frontmatter;
}
