'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('home')

  const tabs = ['home', 'about', 'contact', 'blog']

  return (
    <div className="flex gap-x-2">
      {tabs.map((tab) => (
        <Tab
          key={tab}
          label={tab}
          active={tab === activeTab}
          setActive={setActiveTab}
        />
      ))}
    </div>
  )
}

const Tab = ({
  label,
  active,
  setActive,
}: {
  label: string
  active: boolean
  setActive: (label: string) => void
}) => {
  return (
    <button
      onClick={() => setActive(label)}
      className="relative rounded-md px-4 py-2 text-sm font-medium"
    >
      <span className="relative z-10">{label}</span>
      {active && (
        <motion.div
          className="absolute inset-0 z-0 rounded-full bg-zinc-100 dark:bg-zinc-800"
          layoutId="tab"
          transition={{
            type: 'spring',
            stiffness: 380,
            damping: 30,
          }}
        ></motion.div>
      )}
    </button>
  )
}

export default Tabs
