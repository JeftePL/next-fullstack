'use client'

import Background from '@/components/ui/Background'
import Box from '@/components/ui/Box'
import Feed from '@/components/ui/feed/Feed'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import { useTheme } from '@/hooks/useTheme'

export default function HomePage() {
	const theme = useTheme()

	return (
		<>
			<Header />
			<Box
				tag='main'
				styleSheet={{
					backgroundColor: theme.colors.neutral.x000,
					flex: 1,
					alignItems: 'center',
				}}
			>
				<Background />
				<Feed>
					<FeedPosts />
				</Feed>
				<Footer />
			</Box>
		</>
	)
}
