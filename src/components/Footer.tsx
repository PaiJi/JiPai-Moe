import React from "react"
const Footer: React.FC = () => {
  return (
    <footer className="hidden md:block mt-12 text-primary text-xs">
      <p>
        <span className="font-bold">「JiPai·Store」</span>製作委員会
      </p>
      <span className="">©2015-{new Date().getFullYear()}</span>
    </footer>
  )
}
export default Footer
