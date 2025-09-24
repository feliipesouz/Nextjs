import PostPage from "@/pages/blog-page/[slug]"
import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"

type BlogPostPage = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPage) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PostPage post={post} />
  )
}