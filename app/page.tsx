import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import { format } from "date-fns";
import path from "path";

type PostType = {
  slug: string;
  [key: string]: string;
}

export default async function Home() {
  const postNameList = fs
    .readdirSync("content/posts")
    .filter((fileName) => fileName.endsWith(".mdx"));

  const posts = [] as PostType[];
  for (const postName of postNameList) {
    const postFilePath = path.join(process.cwd(), `content/posts/${postName}`)
    const postFile = fs.readFileSync(postFilePath);
    const serializedPost = await serialize<Record<string, unknown>, { title: string }>(postFile, {
      parseFrontmatter: true
    });
    posts.push({
      ...serializedPost.frontmatter,
      slug: postName.replace(/\.mdx$/, "")
    });
  }

  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <div className="space-y-8 py-4">
      {posts.map((post, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold">
            <Link href={`/blogs/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.description}</p>
          <time className="block my-1 text-sm text-zinc-500">{format(post.date, "yyyy-MM-dd")}</time>
        </div>
      ))}
    </div>
  );
}
