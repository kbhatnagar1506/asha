"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface Reminder {
  id: string
  text: string
  date: string
  time: string
  category: string
  completed: boolean
}

export function DailyReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [newReminder, setNewReminder] = useState({
    text: "",
    date: "",
    time: "",
    category: "general",
  })

  useEffect(() => {
    const stored = localStorage.getItem("reminders")
    if (stored) {
      setReminders(JSON.parse(stored))
    }
  }, [])

  const sortedReminders = [...reminders].sort((a, b) => {
    const dateTimeA = new Date(`${a.date}T${a.time}`)
    const dateTimeB = new Date(`${b.date}T${b.time}`)
    return dateTimeA.getTime() - dateTimeB.getTime()
  })

  const upcomingReminders = sortedReminders.filter((r) => !r.completed)
  const completedReminders = sortedReminders.filter((r) => r.completed)

  const handleAddReminder = () => {
    if (newReminder.text && newReminder.date && newReminder.time) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        text: newReminder.text,
        date: newReminder.date,
        time: newReminder.time,
        category: newReminder.category,
        completed: false,
      }
      const updated = [...reminders, reminder]
      setReminders(updated)
      localStorage.setItem("reminders", JSON.stringify(updated))
      setNewReminder({ text: "", date: "", time: "", category: "general" })
      setIsAdding(false)
    }
  }

  const handleToggleComplete = (id: string) => {
    const updated = reminders.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    setReminders(updated)
    localStorage.setItem("reminders", JSON.stringify(updated))
  }

  const handleDeleteReminder = (id: string) => {
    const updated = reminders.filter((r) => r.id !== id)
    setReminders(updated)
    localStorage.setItem("reminders", JSON.stringify(updated))
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.toDateString() === today.toDateString()) return "Today"
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow"

    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      medicine: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      appointment: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      call: "bg-green-500/20 text-green-300 border-green-500/30",
      general: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    }
    return colors[category] || colors.general
  }

  return (
    <div className="space-y-6">
      {!isAdding && (
        <Button
          onClick={() => setIsAdding(true)}
          className="w-full h-16 text-xl bg-white text-black hover:bg-slate-100 font-semibold rounded-xl shadow-lg"
        >
          + Add New Reminder
        </Button>
      )}

      {isAdding && (
        <Card className="p-6 bg-slate-800 border-slate-700 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">New Reminder</h3>
          <div className="space-y-5">
            <div>
              <Label htmlFor="reminder-text" className="text-lg text-white mb-2 block">
                What do you need to remember?
              </Label>
              <Input
                id="reminder-text"
                value={newReminder.text}
                onChange={(e) => setNewReminder({ ...newReminder, text: e.target.value })}
                className="h-14 text-lg bg-slate-900 border-slate-600 text-white"
                placeholder="e.g., Take morning medicine"
              />
            </div>

            <div>
              <Label htmlFor="reminder-category" className="text-lg text-white mb-2 block">
                Category
              </Label>
              <select
                id="reminder-category"
                value={newReminder.category}
                onChange={(e) => setNewReminder({ ...newReminder, category: e.target.value })}
                className="w-full h-14 text-lg bg-slate-900 border border-slate-600 text-white rounded-md px-3"
              >
                <option value="general">General</option>
                <option value="medicine">Medicine</option>
                <option value="appointment">Appointment</option>
                <option value="call">Phone Call</option>
              </select>
            </div>

            <div>
              <Label htmlFor="reminder-date" className="text-lg text-white mb-2 block">
                Date
              </Label>
              <Input
                id="reminder-date"
                type="date"
                value={newReminder.date}
                onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                className="h-14 text-lg bg-slate-900 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="reminder-time" className="text-lg text-white mb-2 block">
                Time
              </Label>
              <Input
                id="reminder-time"
                type="time"
                value={newReminder.time}
                onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                className="h-14 text-lg bg-slate-900 border-slate-600 text-white"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleAddReminder}
                className="flex-1 h-14 text-lg bg-white text-black hover:bg-slate-100 font-semibold"
              >
                Save Reminder
              </Button>
              <Button
                onClick={() => {
                  setIsAdding(false)
                  setNewReminder({ text: "", date: "", time: "", category: "general" })
                }}
                variant="outline"
                className="flex-1 h-14 text-lg border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {reminders.length === 0 && !isAdding && (
        <Card className="p-12 bg-slate-800/50 border-slate-700 text-center">
          <div className="text-6xl mb-4">📅</div>
          <p className="text-2xl text-slate-300 font-medium">No reminders yet</p>
          <p className="text-lg text-slate-400 mt-2">Add your first reminder to get started</p>
        </Card>
      )}

      {upcomingReminders.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">Upcoming</h3>
          {upcomingReminders.map((reminder) => (
            <Card key={reminder.id} className="p-6 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
              <div className="flex items-start gap-4">
                <Checkbox
                  id={`reminder-${reminder.id}`}
                  checked={reminder.completed}
                  onCheckedChange={() => handleToggleComplete(reminder.id)}
                  className="mt-2 h-7 w-7 border-slate-500"
                />
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor={`reminder-${reminder.id}`}
                    className="text-xl text-white cursor-pointer font-medium block"
                  >
                    {reminder.text}
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm border ${getCategoryColor(reminder.category)}`}>
                      {reminder.category}
                    </span>
                    <span className="text-lg text-slate-300">
                      {formatDate(reminder.date)} at {formatTime(reminder.time)}
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => handleDeleteReminder(reminder.id)}
                  variant="outline"
                  size="sm"
                  className="border-red-600 text-red-400 hover:bg-red-950 bg-transparent h-10 px-4"
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {completedReminders.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-slate-400">Completed</h3>
          {completedReminders.map((reminder) => (
            <Card key={reminder.id} className="p-6 bg-slate-900/50 border-slate-700">
              <div className="flex items-start gap-4">
                <Checkbox
                  id={`reminder-${reminder.id}`}
                  checked={reminder.completed}
                  onCheckedChange={() => handleToggleComplete(reminder.id)}
                  className="mt-2 h-7 w-7 border-slate-500"
                />
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor={`reminder-${reminder.id}`}
                    className="text-xl text-slate-400 cursor-pointer line-through block"
                  >
                    {reminder.text}
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm border opacity-50 ${getCategoryColor(reminder.category)}`}
                    >
                      {reminder.category}
                    </span>
                    <span className="text-lg text-slate-500">
                      {formatDate(reminder.date)} at {formatTime(reminder.time)}
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => handleDeleteReminder(reminder.id)}
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-slate-500 hover:bg-slate-800 bg-transparent h-10 px-4"
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
