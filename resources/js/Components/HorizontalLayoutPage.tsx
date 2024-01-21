import React, { useState, type ReactNode } from 'react'

interface HorizontalLayoutPageProps {
  content: ReactNode;
  sidebar: ReactNode;
  title: string;
}

const HorizontalLayoutPage: React.FC<HorizontalLayoutPageProps> = ({ content, sidebar, title }) => {
  const [opened, setOpened] = useState(false)

  const toggle = () => {
    setOpened(!opened)
  }

  return (
    <div>
      {opened && <div>{sidebar}</div>}
      {content}
    </div>
  )
}

export default HorizontalLayoutPage