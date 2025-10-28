"use client"

import { Button } from "@/components/ui/button"

export function SOSHelp() {
  const handleCallHelp = () => {
    // In a real app, this would trigger a call to emergency contacts
    alert("Calling your emergency contact...")
    // You could integrate with tel: protocol or a calling service
    window.location.href = "tel:911"
  }

  const handleEndSession = () => {
    // End the current session and return to home
    if (confirm("Are you sure you want to end your session?")) {
      localStorage.removeItem("isAuthenticated")
      window.location.href = "/"
    }
  }

  const handleSOS = () => {
    // In a real app, this would trigger emergency services
    if (confirm("This will call emergency services. Continue?")) {
      alert("Calling emergency services...")
      window.location.href = "tel:911"
    }
  }

  const handleAsha = () => {
    // Scroll to Asha section or open Asha chat
    const ashaSection = document.querySelector('[data-section="asha"]')
    if (ashaSection) {
      ashaSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="h-screen w-full grid grid-cols-2 grid-rows-2 gap-0 p-0">
      <Button
        onClick={handleCallHelp}
        className="aspect-square w-full h-full text-4xl font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-lg rounded-none border-2 border-slate-300 flex flex-col items-center justify-center gap-4"
      >
        <span className="text-6xl">📞</span>
        <span>Call Help</span>
      </Button>

      <Button
        onClick={handleEndSession}
        className="aspect-square w-full h-full text-4xl font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-lg rounded-none border-2 border-slate-300 flex flex-col items-center justify-center gap-4"
      >
        <span className="text-6xl">🚪</span>
        <span>End Session</span>
      </Button>

      <Button
        onClick={handleSOS}
        className="aspect-square w-full h-full text-4xl font-bold bg-white text-red-600 hover:bg-red-50 shadow-lg rounded-none border-4 border-red-600 flex flex-col items-center justify-center gap-4"
      >
        <span className="text-6xl">🚨</span>
        <span>SOS</span>
      </Button>

      <Button
        onClick={handleAsha}
        className="aspect-square w-full h-full text-4xl font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-lg rounded-none border-2 border-slate-300 flex flex-col items-center justify-center gap-4"
      >
        <span className="text-6xl">💬</span>
        <span>Asha</span>
      </Button>
    </div>
  )
}
