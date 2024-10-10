"use client"

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';


import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { toast } from "react-toastify"
import { X } from "lucide-react"
import { Button } from "../ui/button"

export default function Message({children}) {
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   try {
  //     const response = await fetch("/api/send-message", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ subject, body }),
  //     })

  //     if (!response.ok) {
  //       throw new Error('Failed to send message')
  //     }

  //     const data = await response.json()
  //     toast({
  //       title: "Success",
  //       description: "Message sent successfully!",
  //     })
  //     setIsOpen(false)
  //     setSubject("")
  //     setBody("")
  //   } catch (error) {
  //     console.error('Error sending message:', error)
  //     toast({
  //       title: "Error",
  //       description: "Failed to send message. Please try again.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  const handleSubmit= () => {
    console.log('hello')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
       
        {children}
     
      </DialogTrigger>
      <DialogContent className="max-w-full h-full flex flex-col p-0 w-[500px]">
        <DialogHeader className="p-6 flex flex-row items-center justify-between">
          <DialogTitle>Create Message</DialogTitle>
          <DialogClose asChild>
            {/* <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button> */}
          </DialogClose>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex-grow flex flex-col p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter message subject"
              required
            />
          </div>
          <div className="space-y-2 flex-grow flex flex-col">
            <Label htmlFor="body">Body</Label>
            {/* <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter message body"
              className="flex-grow"
              required
            /> */}

          <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Undo
                ],
            
                mention: {
                    // Mention configuration
                },
               
            } }
            
        />
          </div>
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSubmitting}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
