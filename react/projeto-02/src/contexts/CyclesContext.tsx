import { ReactNode, createContext, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface NewCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  interruptCurrentCycle: () => void
  createNewCycle: (data: NewCycleData) => void
  setSecondsPassed: (seconds: number) => void
}

interface CyclesProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          }
        }

        return cycle
      }),
    )
    setActiveCycleId(null)
  }

  function interruptCurrentCycle() {
    setCycles((prev) =>
      prev.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptDate: new Date(),
          }
        }

        return cycle
      }),
    )
    setActiveCycleId(null)
  }

  function createNewCycle(data: NewCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((prev) => [newCycle, ...prev])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        setSecondsPassed,
        createNewCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
