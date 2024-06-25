'use client'
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light') // Set a default value

  // Fetch the theme from localStorage once the component is mounted
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  // Save the theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
