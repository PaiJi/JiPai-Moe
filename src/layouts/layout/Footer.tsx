import clsx from "clsx"
import React from "react"

const Footer: React.FC<{ className?: string }> = props => {
  const { className } = props
  return (
    <footer className={clsx("block mt-12 text-primary text-xs", className)}>
      <p>
        <span className="font-bold">「JiPai·Store」</span>製作委員会
      </p>
      <span className="">©2015-{new Date().getFullYear()}</span>
    </footer>
  )
}
export default Footer
