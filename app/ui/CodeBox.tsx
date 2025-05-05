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
        const ref = codeRef.current
        if (ref) {
            ref.removeAttribute('data-highlighted')
            hljs.highlightElement(ref)
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
            {language === 'javascript' && (
                <Button
                    onClick={copyToClipboard}
                    noShadow
                    className='font-hand text-md absolute top-2 right-2 rounded-md bg-gray-700 px-3 py-1 text-white transition'
                >
                    {copied ? 'Copied!' : 'Copy'}
                </Button>
            )}
            <pre>
                <code ref={codeRef} className={cx(language, className)}>
                    {code}
                </code>
            </pre>
        </>
    )
}
