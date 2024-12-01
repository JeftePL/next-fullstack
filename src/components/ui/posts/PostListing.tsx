import usePosts from '@/hooks/usePosts'
import Box from '../Box'
import FeedPost from './FeedPost'
import RecommendedPosts from './RecommendedPosts'

type PostListingProps = {
	variant: 'feed' | 'recommended'
}

export default function PostListing({ variant }: PostListingProps) {
	const posts = usePosts()
	const PostComponent = variant === 'feed' ? FeedPost : RecommendedPosts

	return (
		<Box>
			{posts.map(({ metadata, slug, author, title, image }) => {
				const { id, date, excerpt, tags } = metadata

				return (
					<PostComponent
						key={slug}
						id={id}
						authorId={author}
						title={title}
						excerpt={excerpt}
						date={date}
						tags={tags}
						image={image}
					/>
				)
			})}
		</Box>
	)
}