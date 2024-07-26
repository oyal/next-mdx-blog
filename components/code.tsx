'use client'

import hljs from 'highlight.js';

const Code = ({ code }: { code: string }) => {
  return (
    <pre className="overflow-x-auto">
      <code
        className="hljs language-tsx"
        dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language: 'javascript' }).value }}
      />
    </pre>
  )
}

export default Code
