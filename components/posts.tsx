import Link from 'next/link'

import type { ItemMetadata } from '@/lib/content-type'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: ItemMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <h4 className='text-lg font-semibold'>{post.title}</h4>
              <p className='mt-1 line-clamp-2 text-base font-light text-muted-foreground'>
                {post.summary}
              </p>
            </div>

            {post.publishedAt && (
              <p className='mt-1 text-sm font-light'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
