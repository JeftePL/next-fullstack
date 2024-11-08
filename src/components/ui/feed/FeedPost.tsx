import useAuthor from '@/hooks/useAuthor'
import { useTheme } from '@/hooks/useTheme'
import Box from '../Box'
import ButtonBase from '../button/ButtonBase'
import Icon from '../icon/Icon'
import Image from '../Image'
import Link from '../Link'
import Text from '../Text'

type FeedPostProps = {
	authorId: string
	title: string
	excerpt: string
	url: string
	date: string
	tags: string[]
	image?: string
}

export default function FeedPost({
	authorId,
	title,
	excerpt,
	url,
	date,
	tags,
	image,
}: FeedPostProps) {
	const theme = useTheme()
	const author = useAuthor(authorId)

	const postDate = new Date(date)
		.toLocaleString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
		.replace('.', '')
		.replace(/de /g, '')

	return (
		<Box styleSheet={{ position: 'relative', paddingBottom: '35px' }}>
			<Box
				styleSheet={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					color: theme.colors.neutral.x200,
					marginLeft: '-16px',
				}}
			>
				<Icon
					size='md'
					name='clockFill'
					styleSheet={{
						position: 'absolute',
						top: '-3px',
						left: 0,
						transform: { xs: 'translateX(-50%) scale(.65)', sm: 'translate(-50%) scale(.75)' },
					}}
				/>
				<Box
					styleSheet={{
						position: 'absolute',
						top: '16px',
						bottom: 0,
						margin: 'auto',
						width: '1px',
						backgroundColor: 'currentColor',
					}}
				/>
			</Box>
			<Text
				variant='body4'
				styleSheet={{ fontWeight: 'bold', marginBottom: '16px', marginLeft: '4px' }}
			>
				{postDate}
			</Text>
			<Link
				href={url}
				variant='body1'
				styleSheet={{ marginBottom: '8px', display: 'inline' }}
				colorVariantEnabled={false}
			>
				<Box
					styleSheet={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: '8px',
						marginBottom: '16px',
					}}
				>
					<Image
						src={author?.avatar ?? ''}
						alt='Profile image'
						styleSheet={{
							width: '42px',
							height: '42px',
							borderRadius: '100%',
						}}
					/>
					<Text variant='heading5'>{author?.name}</Text>
				</Box>
				<Box
					tag='span'
					styleSheet={{
						display: 'inline',
						padding: '2px',
						borderRadius: '4px',
						color: theme.colors.neutral.x800,
						backgroundColor: theme.colors.neutral.x200,
						hover: {
							color: theme.colors.primary.x900,
							backgroundColor: theme.colors.primary.x200,
						},
					}}
				>
					{title}
				</Box>
			</Link>
			<Text variant='body3' styleSheet={{ marginBottom: '20px' }}>
				{excerpt}
			</Text>
			<Box styleSheet={{ flexDirection: 'row', gap: '4px' }}>
				{tags.map((tag) => (
					<Link
						key={tag}
						href={`/tags/${tag}`}
						variant='body4'
						styleSheet={{
							color: theme.colors.neutral.x800,
							backgroundColor: theme.colors.negative.x100,
							borderRadius: '1000px',
							padding: '6px 8px',
							hover: {
								color: theme.colors.primary.x900,
								backgroundColor: theme.colors.primary.x200,
							},
						}}
						colorVariantEnabled={false}
					>
						#{tag}
					</Link>
				))}
			</Box>
			{image && (
				<ButtonBase href={url} styleSheet={{ hover: { opacity: 0.8 } }}>
					<Image
						src={image}
						alt={title}
						styleSheet={{ width: '100%', marginTop: '24px', borderRadius: '12px' }}
					/>
				</ButtonBase>
			)}
		</Box>
	)
}
