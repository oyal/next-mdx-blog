import { getAllBlogs } from '@/lib/blogs'
import Link from 'next/link'
import { format } from 'date-fns'

export default async function Home() {
  const posts = await getAllBlogs()

  console.log(posts)

  return (
    <div className="space-y-8 py-4">
      {posts.map((post, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500">
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {post.description}
          </p>
          <time className="my-1 block text-xs text-zinc-400 dark:text-zinc-500">
            {format(post.date, 'yyyy-MM-dd')}
          </time>
        </div>
      ))}
    </div>
  )
}
