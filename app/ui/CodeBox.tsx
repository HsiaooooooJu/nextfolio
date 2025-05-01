'use client'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/night-owl.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', xml)

import { useState, useEffect, useRef } from 'react'
import cx from 'clsx'
import Button from './Button'

type Language = 'html' | 'javascript'

interface CodeBoxProps {
	code: string
	language: Language
	className?: string
}

export default function CodeBox({ code, language, className }: CodeBoxProps) {
	const codeRef = useRef<HTMLPreElement>(null)
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		if (codeRef.current) {
			hljs.highlightBlock(codeRef.current)
		}
	}, [codeRef.current])

	const copyToClipboard = async () => {
		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(code)
				setCopied(true)
				setTimeout(() => setCopied(false), 2000)
			}
		} catch (err) {
			console.error('Failed to copy: ', err)
		}
	}

	return (
		<>
			{language === 'javascript' &&
				<Button onClick={copyToClipboard} className='absolute top-2 right-2 font-hand bg-gray-800 text-white text-md px-3 py-1 rounded-md transition'>
					{copied ? 'Copied!' : 'Copy'}
				</Button>
			}
			<pre className='inset-shadow-b-dark h-full'>
				<code ref={codeRef} className={cx(language, className)}>
					{code}
				</code>
			</pre>

		</>
	)
}
