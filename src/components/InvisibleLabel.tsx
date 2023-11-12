"use client"
import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"

interface InvisibleLabelProps {
  defaultText: string
  showText: string
}

export default function InvisibleLabel(props: InvisibleLabelProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const { defaultText, showText } = props
  const [show, setShow] = useState(false)
  const [defaultWidth, setDefaultWidth] = useState<number>()

  useEffect(() => {
    const width = spanRef.current?.offsetWidth
    if (width && !defaultWidth) {
      setDefaultWidth(width + 1)
    }
  }, [defaultText])

  return (
    <span
      className={clsx("inline-block text-center")}
      ref={spanRef}
      style={{ ...(defaultWidth ? { width: defaultWidth } : {}) }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show ? <span className="">{showText}</span> : <del>{defaultText}</del>}
    </span>
  )
}
