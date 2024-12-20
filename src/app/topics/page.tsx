'use client'

import Aside from '@/components/ui/Aside'
import AuthorLink from '@/components/ui/AuthorLink'
import Box from '@/components/ui/Box'
import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Link from '@/components/ui/Link'
import Tag from '@/components/ui/Tag'
import Text from '@/components/ui/Text'
import { useAuthors } from '@/hooks/useAuthor'
import useTags from '@/hooks/useTags'

export default function TopicsPage() {
	const tags = useTags()
	const authors = useAuthors()

	return (
		<>
			<Header />
			<Box
				tag='main'
				styleSheet={{
					flex: 1,
					alignItems: 'center',
					maxWidth: { xs: '100%', sm: '768px', md: '992px', lg: '1280px', xl: '1592px' },
					width: '100%',
					marginHorizontal: 'auto',
				}}
			>
				<Box
					styleSheet={{
						flexDirection: 'row',
						gap: '55px',
						width: '100%',
						paddingHorizontal: '20px',
					}}
				>
					<Box
						styleSheet={{
							marginTop: '110px',
							width: '71%',
						}}
					>
						<Card>
							<Text tag='h2' variant='heading1'>
								Topics
							</Text>
							<Box
								styleSheet={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									gap: '10px',
								}}
							>
								{[...tags].map((tag) => (
									<Tag key={tag} tag={tag} />
								))}
							</Box>
						</Card>
					</Box>
					<Aside>
						<Card>
							<Text variant='heading4'>Authors</Text>
							{authors.map((author) => (
								<AuthorLink key={author.id} author={author} />
							))}
							<Link href='/authors'>See all</Link>
						</Card>
						<Card>
							<Footer />
						</Card>
					</Aside>
				</Box>
			</Box>
		</>
	)
}
