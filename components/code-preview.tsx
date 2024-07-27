'use client'

import { Suspense, useMemo } from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import Code from '@/components/code'

interface CodePreviewProps {
  path: string
}

const CodePreview = ({ path }: CodePreviewProps) => {
  const Preview = useMemo(() => {
    const Component = require(`../code-snippet/${path}.tsx`).default
    return <Component />
  }, [path])

  const codeString = useMemo(() => {
    try {
      const code = require(`!!raw-loader!../code-snippet/${path}.tsx`).default
      const filteredCode = code.replace(/'use client'\n/, '')
      return filteredCode
    } catch (error) {
      return ''
    }
  }, [path])

  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="preview" title="预览">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="relative flex min-h-[250px] items-center justify-center border rounded-md">
              {Preview}
            </div>
          </Suspense>
        </Tab>
        <Tab key="code" title="代码">
          <Code code={codeString} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default CodePreview
