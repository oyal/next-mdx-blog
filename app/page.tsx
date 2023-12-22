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
          <h2 className="text-xl font-bold">
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.description}</p>
          <time className="my-1 block text-sm text-zinc-500">
            {format(post.date, 'yyyy-MM-dd')}
          </time>
        </div>
      ))}
    </div>
  )
}
