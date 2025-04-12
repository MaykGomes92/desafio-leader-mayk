import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { Button } from '@/components/ui/button'

export default function Theme() {

  const [iconTheme, setIconTheme] = React.useState(false)

  const element = document.documentElement;
  function toogleTheme() {
    setIconTheme(!iconTheme)
    if (element.classList[0] == 'dark') {
      element.classList.remove('dark')
    } else {
      element.classList.add('dark')
    }
  }

  return (
    iconTheme ? (
      <FaMoon onClick={toogleTheme} className="cursor-pointer size-6" />
    ) : (
      <FaRegMoon onClick={toogleTheme} className="cursor-pointer size-6"/>
    )
  )
}
