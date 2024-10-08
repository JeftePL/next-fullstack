'use client'

import Background from '@/components/ui/Background'
import Box from '@/components/ui/Box'
import Feed from '@/components/ui/feed/Feed'
import FeedHeader from '@/components/ui/feed/FeedHeader'
import FeedPosts from '@/components/ui/feed/FeedPosts'
import Footer from '@/components/ui/Footer'
import Menu from '@/components/ui/Menu'
import { useTheme } from '@/hooks/useTheme'

export default function HomePage() {
	const theme = useTheme()

	return (
		<>
			<Box
				tag='main'
				styleSheet={{
					backgroundColor: theme.colors.neutral.x000,
					flex: 1,
					alignItems: 'center',
				}}
			>
				<Background />
				<Menu />
				<Feed>
					<FeedHeader />
					<FeedPosts />
				</Feed>
				<Footer />
			</Box>
		</>
	)
}
