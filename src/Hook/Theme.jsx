import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { Button } from '@/components/ui/button'

export default function Theme() {

  const [iconTheme, setIconTheme] = React.useState(false)
  const element = document.documentElement;
  const [themeStorage, setThemeStorage] = React.useState('')

  React.useLayoutEffect(() => {
    setThemeStorage(window.localStorage.getItem('theme'))
    if(themeStorage !== ''){
      element.classList.add(themeStorage)
    }
  },[themeStorage])
  
  function toogleTheme() {
    setIconTheme(!iconTheme)
    if (element.classList[0] == 'dark') {
      element.classList.remove('dark')
      window.localStorage.setItem('theme','')
    } else {
      element.classList.add('dark')
      window.localStorage.setItem('theme','dark')
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
