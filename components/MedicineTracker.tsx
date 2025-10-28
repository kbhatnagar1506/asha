"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

interface Medicine {
  id: string
  name: string
  dosage: string
  time: string
}

export function MedicineTracker() {
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [newMedicine, setNewMedicine] = useState({ name: "", dosage: "", time: "" })

  useEffect(() => {
    // Load medicines from localStorage
    const stored = localStorage.getItem("medicines")
    if (stored) {
      setMedicines(JSON.parse(stored))
    }
  }, [])

  const handleAddMedicine = () => {
    if (newMedicine.name && newMedicine.dosage && newMedicine.time) {
      const medicine: Medicine = {
        id: Date.now().toString(),
        ...newMedicine,
      }
      const updated = [...medicines, medicine]
      setMedicines(updated)
      localStorage.setItem("medicines", JSON.stringify(updated))
      setNewMedicine({ name: "", dosage: "", time: "" })
      setIsAdding(false)
    }
  }

  const handleDeleteMedicine = (id: string) => {
    const updated = medicines.filter((m) => m.id !== id)
    setMedicines(updated)
    localStorage.setItem("medicines", JSON.stringify(updated))
  }

  return (
    <div className="space-y-4">
      {!isAdding && (
        <Button
          onClick={() => setIsAdding(true)}
          className="w-full h-14 text-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold"
        >
          Add Medicine
        </Button>
      )}

      {isAdding && (
        <Card className="p-6 bg-slate-900/70 border-slate-600">
          <div className="space-y-4">
            <div>
              <Label htmlFor="medicine-name" className="text-lg text-white">
                Medicine Name
              </Label>
              <Input
                id="medicine-name"
                value={newMedicine.name}
                onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                className="h-12 text-lg bg-slate-800 border-slate-600 text-white mt-2"
                placeholder="e.g., Aspirin"
              />
            </div>
            <div>
              <Label htmlFor="medicine-dosage" className="text-lg text-white">
                Dosage
              </Label>
              <Input
                id="medicine-dosage"
                value={newMedicine.dosage}
                onChange={(e) => setNewMedicine({ ...newMedicine, dosage: e.target.value })}
                className="h-12 text-lg bg-slate-800 border-slate-600 text-white mt-2"
                placeholder="e.g., 1 tablet"
              />
            </div>
            <div>
              <Label htmlFor="medicine-time" className="text-lg text-white">
                Time
              </Label>
              <Input
                id="medicine-time"
                value={newMedicine.time}
                onChange={(e) => setNewMedicine({ ...newMedicine, time: e.target.value })}
                className="h-12 text-lg bg-slate-800 border-slate-600 text-white mt-2"
                placeholder="e.g., Morning, 8 AM"
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleAddMedicine}
                className="flex-1 h-12 text-lg bg-white text-slate-900 hover:bg-slate-100"
              >
                Save
              </Button>
              <Button
                onClick={() => setIsAdding(false)}
                variant="outline"
                className="flex-1 h-12 text-lg border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {medicines.length === 0 && !isAdding && (
        <p className="text-center text-lg text-slate-400 py-8">No medicines added yet</p>
      )}

      <div className="space-y-3">
        {medicines.map((medicine) => (
          <Card key={medicine.id} className="p-6 bg-slate-900/70 border-slate-600">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">{medicine.name}</h3>
                <p className="text-lg text-slate-300">Dosage: {medicine.dosage}</p>
                <p className="text-lg text-slate-300">Time: {medicine.time}</p>
              </div>
              <Button
                onClick={() => handleDeleteMedicine(medicine.id)}
                variant="outline"
                className="border-red-600 text-red-400 hover:bg-red-950 bg-transparent"
              >
                Remove
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
