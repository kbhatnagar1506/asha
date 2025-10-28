import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">Asha</h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light">Your Caring Companion</p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-12">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">
              A warm, friendly companion who is always here to listen, help you remember your medicines, and keep you
              connected.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Available 24/7 to chat, remind, and support you whenever you need.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-xl px-12 py-8 h-auto bg-white text-slate-900 hover:bg-slate-100 font-semibold"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 h-auto border-2 border-white text-white hover:bg-white/10 font-semibold bg-transparent"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mt-8">
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-3">Talk to Asha</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Have friendly conversations anytime you feel like chatting
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-3">Medicine Reminders</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Never forget your medicines with helpful reminders
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-3">Emergency Help</h3>
              <p className="text-lg text-slate-300 leading-relaxed">Quick access to help whenever you need it most</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
