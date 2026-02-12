"use client"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

interface RequestCallbackDialogProps {
  children: React.ReactNode
}


export default function RequestCallbackDialog({
  children,
}: RequestCallbackDialogProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-stone-100 border border-white/10 text-white">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-green-600">
                Request a Call Back
              </DialogTitle>
              <DialogDescription className="text-black">
                Leave your details and our team will contact you shortly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <input
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-black"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-black"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-black"
              />

              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-black rounded-md"
              >
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Request Received
            </h3>
            <p className="text-white/60">
              We’ll reach out shortly.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
