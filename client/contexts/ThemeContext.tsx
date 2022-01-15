import React, { createContext, useEffect, useState } from 'react'

type ThemeContext = {
  darkTheme: boolean,
  toggleDarkTheme: () => void
}

export const Theme = createContext<ThemeContext>({ darkTheme: false, toggleDarkTheme: () => { } })

export const ThemeContext = (props: any) => {
  const [darkTheme, setDarkTheme] = useState(false)
  const toggleDarkTheme = () => { setDarkTheme(!darkTheme) }

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    !!stored && setDarkTheme(stored === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])

  return (
    <Theme.Provider
      value={{
        darkTheme, toggleDarkTheme
      }}
      {...props}
    />
  )
}