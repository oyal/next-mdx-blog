'use client'

import { useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Code from '@/components/code'
import CopyButton from '@/components/copy-button'

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
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">预览</TabsTrigger>
          <TabsTrigger value="code">代码</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="relative flex min-h-[250px] items-center justify-center rounded-md border">
            {Preview}
            <CopyButton content={codeString} />
          </div>
        </TabsContent>
        <TabsContent value="code" className="relative">
          <Code code={codeString} />
          <CopyButton content={codeString} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CodePreview
