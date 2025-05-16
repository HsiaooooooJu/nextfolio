'use client'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/paraiso-light.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', xml)

import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import cx from 'clsx'

type Language = 'html' | 'javascript'

interface CodeBoxProps {
    code: string
    language: Language
    className?: string
}

export default function CodeBox({ code, language, className }: CodeBoxProps) {
    const [highlightedCode, setHighlightedCode] = useState('')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const result = hljs.highlight(code, { language }).value
        setHighlightedCode(result)
    }, [code, language])

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
            {language === 'javascript' && (
                <Button
                    onClick={copyToClipboard}
                    noShadow
                    className={cx(
                        !copied && 'cursor-pointer',
                        'font-hand text-md absolute top-2 right-2 rounded-md bg-gray-700 px-3 py-1 text-white transition',
                    )}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </Button>
            )}
            <pre
                className={cx(
                    'round-lg overflow-x-auto bg-neutral-100 p-6 dark:bg-neutral-800 dark:text-white',
                    className,
                )}
            >
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
        </>
    )
}
