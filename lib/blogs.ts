import glob from 'fast-glob'

interface Blog {
  title: string
  description: string
  date: string
}

interface BlogWithSlug extends Blog {
  slug: string
}

async function importBlogs(blogFileName: string): Promise<BlogWithSlug> {
  const { blog } = (await import(`../app/blogs/${blogFileName}`)) as {
    default: React.ReactNode
    blog: Blog
  }
  return {
    slug: blogFileName.replace(/(\/page)?\.mdx$/, ''),
    ...blog,
  }
}

export async function getAllBlogs() {
  const blogFileNames = await glob('*/page.mdx', {
    cwd: './app/blogs',
  })

  const blogs = await Promise.all(blogFileNames.map(importBlogs))

  return blogs.sort((a, b) => +new Date(b.date) - +new Date(a.date))
}
