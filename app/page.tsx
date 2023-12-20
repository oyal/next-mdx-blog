import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";

type PostType = {
  slug: string;
} & Record<string, string>;

export default async function Home() {
  const postNameList = fs
    .readdirSync("content/posts")
    .filter((fileName) => fileName.endsWith(".mdx"));

  const posts = [] as PostType[];
  for (const postName of postNameList) {
    const postFile = fs.readFileSync(`content/posts/${postName}`, "utf8");
    console.log(postFile);
    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });
    posts.push({
      ...serializedPost.frontmatter,
      slug: postName.replace(/\.mdx$/, ""),
    });
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      {posts.map((post, index) => (
        <Link key={index} href={`/blogs/${post.slug}`}>
          <h2 className="my-2 text-2xl font-semibold">{post.title}</h2>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
}
