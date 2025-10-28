"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MedicineTracker } from "@/components/MedicineTracker"
import { DailyReminders } from "@/components/DailyReminders"
import { SOSHelp } from "@/components/SOSHelp"
import { MessageCircle, Pill, Bell, AlertCircle } from "lucide-react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-id"?: string
      }
    }
  }
}

type Section = "asha" | "medicine" | "reminders" | "sos"

export default function DashboardPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [activeSection, setActiveSection] = useState<Section>("asha")

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("isAuthenticated")
    if (!isAuth) {
      router.push("/login")
      return
    }

    // Get user name
    const name = localStorage.getItem("userName") || localStorage.getItem("userEmail") || "Friend"
    setUserName(name)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    router.push("/")
  }

  const menuItems = [
    { id: "asha" as Section, label: "Talk to Asha", icon: MessageCircle },
    { id: "medicine" as Section, label: "Medicine", icon: Pill },
    { id: "reminders" as Section, label: "Reminders", icon: Bell },
    { id: "sos" as Section, label: "SOS & Help", icon: AlertCircle },
  ]

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side Menu */}
      <div className="w-80 bg-black border-r border-zinc-800 flex flex-col">
        {/* User Info */}
        <div className="p-6 border-b border-zinc-800">
          <h3 className="text-2xl font-bold text-white mb-2">{userName}</h3>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full text-lg py-6 h-auto border-zinc-700 text-white hover:bg-zinc-900 bg-transparent"
          >
            Logout
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4">
          <div className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-4 p-6 rounded-lg text-left transition-all text-xl font-semibold ${
                    activeSection === item.id
                      ? "bg-white text-black"
                      : "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Main Content Area - Takes full screen except menu */}
      <div className="flex-1 overflow-auto">
        {/* Talk to Asha Section */}
        {activeSection === "asha" && (
          <div
            className="min-h-screen flex flex-col items-center justify-center p-8 gap-12"
            style={{
              backgroundImage: "url(/images/asha-background.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-8xl font-bold text-white drop-shadow-2xl">ASHA</h1>
            <elevenlabs-convai agent-id="agent_8701k8mp4es6fk0btvf0j52tfaa1"></elevenlabs-convai>
          </div>
        )}

        {/* Medicine Section */}
        {activeSection === "medicine" && (
          <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Which Medicine Is It?</h2>
              <MedicineTracker />
            </div>
          </div>
        )}

        {/* Daily Reminders Section */}
        {activeSection === "reminders" && (
          <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Daily Reminders</h2>
              <DailyReminders />
            </div>
          </div>
        )}

        {/* SOS & Help Section */}
        {activeSection === "sos" && (
          <div className="min-h-screen">
            <SOSHelp />
          </div>
        )}
      </div>
    </div>
  )
}
