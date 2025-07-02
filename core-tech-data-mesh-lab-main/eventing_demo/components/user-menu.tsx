"use client"

import { useState } from "react"
import { User, LogOut } from "lucide-react"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { useUser } from "@/lib/user-context"

export function UserMenu() {
  const { username, setUsername, clearUsername } = useUser()
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!username) return null

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    
    if (!trimmedValue) return
    
    setIsSubmitting(true)
    setUsername(trimmedValue)
    setInputValue("")
    setIsSubmitting(false)
    setIsEditDialogOpen(false)
  }

  const handleEditClick = () => {
    setInputValue(username)
    setIsEditDialogOpen(true)
  }

  const handleClearUser = () => {
    clearUsername()
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2 text-sm">
        <User className="h-4 w-4" />
        <span>{username}</span>
      </div>
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleEditClick}
            className="text-xs px-2 py-1 h-auto"
          >
            Edit
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Username</DialogTitle>
            <DialogDescription>
              Update your username for analytics tracking.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleEditSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-username" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-username"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your name"
                  className="col-span-3"
                  disabled={isSubmitting}
                  autoFocus
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsEditDialogOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={!inputValue.trim() || isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={handleClearUser}
        className="text-xs px-2 py-1 h-auto text-red-600 hover:text-red-700"
        title="Clear username"
      >
        <LogOut className="h-3 w-3" />
      </Button>
    </div>
  )
} 