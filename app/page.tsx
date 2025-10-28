"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Heart,
  Shield,
  Clock,
  Users,
  Brain,
  Smile,
  Activity,
  BookOpen,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero-background.png)",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top Left Sign In / Login */}
        <div className="absolute top-8 left-8 z-20 flex gap-4">
          <Link href="/login">
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-8 py-6 h-auto border-2 border-white text-white hover:bg-white/20 font-semibold bg-black/40 backdrop-blur rounded-xl"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="lg"
              className="text-xl px-8 py-6 h-auto bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl shadow-xl"
            >
              Login
            </Button>
          </Link>
        </div>

        {/* ASHA Title */}
        <div className="absolute bottom-12 left-12 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl animate-fade-in">ASHA</h1>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-in">
            Challenges Faced by Senior Citizens
          </h2>
          <p className="text-2xl text-slate-400 text-center mb-20 max-w-4xl mx-auto">
            We understand the real struggles that seniors face every day. Asha was built to address these challenges
            with compassion and technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Problem 1 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 animate-slide-up">
              <div className="bg-red-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Loneliness & Emotional Neglect</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Many seniors feel isolated and emotionally neglected, lacking someone to talk to and share their
                feelings with.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 animate-slide-up delay-100">
              <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Mental Health Issues</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Depression, anxiety, and boredom from repetitive routines lead to mental decline and reduced quality of
                life.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 animate-slide-up delay-200">
              <div className="bg-green-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Health Monitoring Gaps</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Lack of regular check-ups, missed medications, and delayed emergency response put health at risk.
              </p>
            </div>

            {/* Problem 4 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 animate-slide-up delay-300">
              <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Loss of Dignity & Independence</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Depending on others for basic needs hurts self-respect and makes seniors feel they no longer contribute
                to society.
              </p>
            </div>

            {/* Problem 5 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 animate-slide-up">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Lack of Personalized Care</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Caretakers have limited time, resulting in low attention per person and generic care approaches.
              </p>
            </div>

            {/* Problem 6 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border border-slate-800 animate-slide-up delay-100">
              <div className="bg-pink-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Memory Loss & Cognitive Decline</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Many elders suffer from dementia or mild memory loss, forgetting faces, names, or daily tasks.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 border-t border-slate-900">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-in">
            How Asha Solves These Problems
          </h2>
          <p className="text-2xl text-slate-400 text-center mb-20 max-w-4xl mx-auto">
            Asha is more than an app - it's a caring companion designed with intelligent features to address every
            challenge seniors face.
          </p>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* Solution 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center animate-slide-up">
              <div className="flex-1">
                <div className="bg-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">Emotionally Intelligent Companion</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  Asha talks like a friend, remembers your birthday, name, favorite stories, and daily routine. She can
                  converse in your local language or dialect and reminds you to stay positive.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  The app teaches bhajans, meditation, light exercises through voice, and shares daily news, jokes, and
                  riddles to keep your mind active and engaged.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/elderly-person-having-friendly-video-call-conversa.jpg"
                  alt="Friendly conversation"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>

            {/* Solution 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center animate-slide-up delay-100">
              <div className="flex-1">
                <div className="bg-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Smile className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">Mood Tracking & Mental Wellness</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  Asha detects signs of sadness or stress in speech or facial expressions, then suggests relaxing
                  activities, music, or connects you with volunteers or counselors automatically.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Personalized activities include daily quizzes, memory games, and mood tracking to keep your mental
                  health in check.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/elderly-person-happily-talking-to-ai-assistant-on-.jpg"
                  alt="Mental wellness"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>

            {/* Solution 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center animate-slide-up delay-200">
              <div className="flex-1">
                <div className="bg-green-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">AI-Based Health Monitoring</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  Simple health reminder and alert system that reminds you to take medicine, drink water, walk, or
                  monitor vital signs using sensors or voice commands.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Tracks heart rate, blood pressure, and more. Voice recognition detects stress or irregular breathing
                  and calls for help automatically.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/medicine-pills-organizer-with-calendar-elderly-hea.jpg"
                  alt="Health monitoring"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>

            {/* Solution 4 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center animate-slide-up delay-300">
              <div className="flex-1">
                <div className="bg-orange-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">Mentorship & Legacy Building</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  Asha connects you with students or youth who seek guidance in traditional skills, life advice, or
                  language learning - making you a mentor, not a dependent.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Record short life stories, advice, recipes, or lessons. AI organizes these into a "Legacy Journal" -
                  even turning them into e-books or audio stories.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/elderly-person-setting-up-profile-with-medicine-re.jpg"
                  alt="Legacy building"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>

            {/* Solution 5 */}
            <div className="flex flex-col md:flex-row gap-12 items-center animate-slide-up">
              <div className="flex-1">
                <div className="bg-red-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">Personalized Care Tracking</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  The app tracks each elder's routine, diet, medicine, and mood to alert staff if something unusual
                  happens.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Daily health and emotional status reports ensure personalized attention and timely interventions.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/calendar-with-reminders-appointments-elderly-plann.jpg"
                  alt="Care tracking"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>

            {/* Solution 6 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center animate-slide-up delay-100">
              <div className="flex-1">
                <div className="bg-cyan-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">AI Community Circles</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  Voice-based AI system that connects one elder with another from different locations for daily
                  conversation - like an "AI call buddy" system.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Build friendships and social connections beyond physical boundaries, reducing isolation.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/elderly-man-talking-on-phone-smiling-happy-convers.jpg"
                  alt="Community connection"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>

            {/* Solution 7 */}
            <div className="flex flex-col md:flex-row gap-12 items-center animate-slide-up delay-200">
              <div className="flex-1">
                <div className="bg-indigo-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-4xl font-semibold text-white mb-4">Tech Education Made Simple</h3>
                <p className="text-2xl text-slate-300 leading-relaxed mb-4">
                  AI teaches basic technology through interactive, step-by-step guidance tailored to your pace.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Learn to use smartphones, video calls, and digital services with patience and clarity - empowering
                  independence.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/simple-signup-form-on-tablet-elderly-friendly-inte.jpg"
                  alt="Tech education"
                  width={500}
                  height={300}
                  className="w-full rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 border-t border-slate-900">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-in">
            Our Mission & Vision
          </h2>
          <p className="text-2xl text-slate-400 text-center mb-20 max-w-4xl mx-auto">
            Asha was built with a clear purpose - to transform aging into a joyful, dignified, and connected experience
            through compassionate AI.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Mission 1 */}
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-10 rounded-3xl border border-slate-700 animate-slide-up">
              <p className="text-2xl text-white leading-relaxed italic">
                "To give every elder a friend that never forgets, never judges, and never leaves — powered by the
                kindness of AI."
              </p>
            </div>

            {/* Mission 2 */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-10 rounded-3xl border border-slate-700 animate-slide-up delay-100">
              <p className="text-2xl text-white leading-relaxed italic">
                "To turn loneliness into connection and care through AI — creating a compassionate digital companion
                that listens, remembers, and heals the hearts of senior citizens."
              </p>
            </div>

            {/* Mission 3 */}
            <div className="bg-gradient-to-r from-pink-900/40 to-red-900/40 p-10 rounded-3xl border border-slate-700 animate-slide-up delay-200">
              <p className="text-2xl text-white leading-relaxed italic">
                "To build an AI-powered world where no elder feels unseen, unheard, or unloved — where technology
                restores connection and dignity to aging lives."
              </p>
            </div>

            {/* Mission 4 */}
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 p-10 rounded-3xl border border-slate-700 animate-slide-up delay-300">
              <p className="text-2xl text-white leading-relaxed italic">
                "To make aging graceful and joyful through AI that listens like a friend, reminds like a caretaker, and
                cares like family."
              </p>
            </div>

            {/* Mission 5 - Featured */}
            <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/40 p-12 rounded-3xl border-2 border-yellow-500/50 animate-slide-up">
              <p className="text-3xl text-white leading-relaxed italic font-semibold text-center">
                "To create a future where aging is celebrated, not feared — powered by intelligent compassion and
                inclusive AI."
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 border-t border-slate-900">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-in">
            Real Impact, Real Results
          </h2>
          <p className="text-2xl text-slate-400 text-center mb-20 max-w-4xl mx-auto">
            Over 6 months, Asha was introduced across 10 Vridh Ashrams in Maharashtra and among 50 senior citizens from
            nearby societies. Here's the measurable impact we've made.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-blue-900/60 to-blue-950/60 p-10 rounded-3xl border border-blue-700/50 text-center animate-slide-up">
              <div className="text-6xl font-bold text-blue-400 mb-4">1,050</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Elders Impacted</h3>
              <p className="text-lg text-slate-300">
                1,000 from 10 Vridh Ashrams + 50 from local societies now have a caring companion
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-purple-900/60 to-purple-950/60 p-10 rounded-3xl border border-purple-700/50 text-center animate-slide-up delay-100">
              <div className="text-6xl font-bold text-purple-400 mb-4">520,000+</div>
              <h3 className="text-2xl font-semibold text-white mb-2">AI Interactions</h3>
              <p className="text-lg text-slate-300">
                Average of ~2,000 meaningful conversations per day across all users
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-green-900/60 to-green-950/60 p-10 rounded-3xl border border-green-700/50 text-center animate-slide-up delay-200">
              <div className="text-6xl font-bold text-green-400 mb-4">2,300+</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Mentorship Sessions</h3>
              <p className="text-lg text-slate-300">
                Elders sharing wisdom through storytelling and mentorship programs
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-orange-900/60 to-orange-950/60 p-10 rounded-3xl border border-orange-700/50 text-center animate-slide-up delay-300">
              <div className="text-6xl font-bold text-orange-400 mb-4">350</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Youth Volunteers</h3>
              <p className="text-lg text-slate-300">
                Young people assisting with onboarding, feedback, and interaction tracking
              </p>
            </div>

            {/* Stat 5 */}
            <div className="bg-gradient-to-br from-red-900/60 to-red-950/60 p-10 rounded-3xl border border-red-700/50 text-center animate-slide-up">
              <div className="text-6xl font-bold text-red-400 mb-4">43%</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Workload Reduced</h3>
              <p className="text-lg text-slate-300">
                Caretakers now have more time for personalized attention and care
              </p>
            </div>

            {/* Stat 6 */}
            <div className="bg-gradient-to-br from-pink-900/60 to-pink-950/60 p-10 rounded-3xl border border-pink-700/50 text-center animate-slide-up delay-100">
              <div className="text-6xl font-bold text-pink-400 mb-4">6</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Months of Impact</h3>
              <p className="text-lg text-slate-300">
                Continuous improvement and growing positive outcomes for all users
              </p>
            </div>
          </div>

          {/* Impact Quote */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-12 rounded-3xl border border-slate-700 text-center animate-fade-in">
            <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <p className="text-3xl text-white leading-relaxed italic mb-4">
              "Asha has transformed how we care for our elders. The reduction in loneliness and improvement in mental
              health has been remarkable."
            </p>
            <p className="text-xl text-slate-400">- Ashram Director, Maharashtra</p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="container mx-auto px-4 py-24 border-t border-slate-900">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur p-16 rounded-3xl border border-slate-700 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Meet Asha?</h2>
            <p className="text-2xl text-slate-300 mb-10 leading-relaxed">
              Join over 1,000 people who have found comfort, support, and companionship with Asha. Start your journey
              today and experience the difference.
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="text-2xl px-16 py-10 h-auto bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Start Your Journey Today
              </Button>
            </Link>
            <p className="text-lg text-slate-400 mt-6">
              No credit card required • Compassionate AI companion • Join our community
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-4 py-12 border-t border-slate-900">
          <p className="text-center text-slate-400 text-lg">
            © 2025 Asha. Your caring companion, always here for you. Making aging graceful and joyful.
          </p>
        </div>
      </div>
    </main>
  )
}
