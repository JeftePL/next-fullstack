'use client'

import templateConfig from '@/actions/template'
import { TemplateConfigContext } from '@/context/TemplateConfigContext'
import { TemplateConfig } from '@/types/Template'
import { useEffect, useState } from 'react'

type TemplateConfigProviderProps = {
	children: React.ReactNode
}

export default function TemplateConfigProvider({ children }: TemplateConfigProviderProps) {
	const [value, setValue] = useState<TemplateConfig>({})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const template = await templateConfig()
				setValue(template)
			} catch (error) {
				console.error(error)
			}
		}
		fetchData()
	}, [])

	return <TemplateConfigContext.Provider value={value}>{children}</TemplateConfigContext.Provider>
}
