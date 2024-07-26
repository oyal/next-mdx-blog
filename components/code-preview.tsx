'use client'

import { useMemo } from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import Code from '@/components/code'

interface CodePreviewProps {
  path: string
}

const CodePreview = ({ path }: CodePreviewProps) => {
  const Preview = useMemo(() => {
    const Component = require(`./${path}.tsx`).default
    return <Component />
  }, [path])

  const codeString = useMemo(() => {
    const code = require(`!!raw-loader!./${path}.tsx`).default
    const filteredCode = code.replace(/'use client'\n/, '')
    return filteredCode
  }, [path])

  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="preview" title="预览">
          {Preview}
        </Tab>
        <Tab key="code" title="代码">
          <Code code={codeString} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default CodePreview
