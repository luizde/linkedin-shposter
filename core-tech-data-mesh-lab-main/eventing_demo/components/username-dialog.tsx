"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useUser } from "@/lib/user-context"

export function UsernameDialog() {
  const { username, setUsername } = useUser()
  const [inputValue, setInputValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isOpen = !username

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    
    if (!trimmedValue) return
    
    setIsSubmitting(true)
    setUsername(trimmedValue)
    setInputValue("")
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]" hideCloseButton>
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-3">
              <User className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <DialogTitle className="text-center">Welcome to Zillow Demo</DialogTitle>
          <DialogDescription className="text-center">
            Please enter your name to get started. This will be used for analytics tracking.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Name
              </Label>
              <Input
                id="username"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="col-span-3"
                disabled={isSubmitting}
                autoFocus
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="submit" 
              disabled={!inputValue.trim() || isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Setting up..." : "Get Started"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 