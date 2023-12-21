import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from 'path'

import "highlight.js/styles/atom-one-dark.css";

import Mdx from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string;
  };
}

const PostsPage = async ({ params: { slug } }: PostProps) => {
  try {
    const postFilePath = path.join(process.cwd(), `content/posts/${slug}.mdx`)
    const postFile = fs.readFileSync(postFilePath);

    const source = await serialize(postFile, {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkGfm],
      }
    });
    return (
      <div className="prose prose-zinc dark:prose-invert py-8">
        <h1 className="text-center">
          {source.frontmatter.title as string}
        </h1>
        <Mdx {...source} />
      </div>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
};

export default PostsPage;

async function getPostBySlug(slug: string) {
  const postFilePath = path.join(process.cwd(), `content/posts/${slug}.mdx`)
  const postFile = fs.readFileSync(postFilePath);

  const source = await serialize(postFile, { parseFrontmatter: true });

  return source;
}

export async function generateMetadata({ params }: PostProps) {
  const { frontmatter } = await getPostBySlug(params.slug);
  return frontmatter;
}
