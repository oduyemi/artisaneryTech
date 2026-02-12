"use client"
import { useState, useEffect } from "react"
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
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [showToast, setShowToast] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/xdaleepz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        const data = await res.json()
        setErrorMsg(data?.errors?.[0]?.message || "Submission failed.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  /* Auto close dialog after success */
  useEffect(() => {
    if (status === "success") {
      const closeTimer = setTimeout(() => {
        setOpen(false)
        setShowToast(true)
      }, 3500)

      return () => clearTimeout(closeTimer)
    }
  }, [status])

  /* Hide toast automatically */
  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 4000)
      return () => clearTimeout(t)
    }
  }, [showToast])

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="sm:max-w-lg bg-stone-100 border border-white/10 text-white">
          {status !== "success" ? (
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
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-black"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-black"
                />
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-black"
                />

                {status === "error" && (
                  <p className="text-sm text-red-500">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-green-600 text-black rounded-md disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Request Received
              </h3>
              <p className="text-black/70">
                We’ll reach out shortly.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Floating Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="rounded-full bg-green-600 text-black px-6 py-3 shadow-lg">
            Callback request sent successfully
          </div>
        </div>
      )}
    </>
  )
}