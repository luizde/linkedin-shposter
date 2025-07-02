"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface UserContextType {
  username: string | null
  setUsername: (username: string) => void
  clearUsername: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsernameState] = useState<string | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load username from localStorage on client-side hydration
  useEffect(() => {
    const savedUsername = localStorage.getItem("zillow-demo-username")
    if (savedUsername) {
      setUsernameState(savedUsername)
    }
    setIsHydrated(true)
  }, [])

  const setUsername = (newUsername: string) => {
    const trimmedUsername = newUsername.trim()
    if (trimmedUsername) {
      setUsernameState(trimmedUsername)
      localStorage.setItem("zillow-demo-username", trimmedUsername)
    }
  }

  const clearUsername = () => {
    setUsernameState(null)
    localStorage.removeItem("zillow-demo-username")
  }

  // Don't render children until hydrated to avoid hydration mismatch
  if (!isHydrated) {
    return null
  }

  return (
    <UserContext.Provider value={{ username, setUsername, clearUsername }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
} 