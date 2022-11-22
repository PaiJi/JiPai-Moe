import React from "react"
const Footer: React.FC = () => {
  return (
    <footer className="text-center md:text-right mt-12 py-8">
      <span className="text-primary text-sm">
        ©2015-{new Date().getFullYear()}
        <span className="font-bold">「JiPai·Store」</span>製作委員会
      </span>
    </footer>
  )
}
export default Footer
