import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface Transacation {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
}

interface TransacationContextProps {
  transacations: Transacation[]
  getTransactions: (q: string) => Promise<void>
  createNewTransaction: (transaction: CreateTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransacationContext = createContext({} as TransacationContextProps)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transacations, setTransacations] = useState<Transacation[]>([])

  async function getTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _short: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransacations(response.data)
  }

  async function createNewTransaction(transaction: CreateTransactionInput) {
    const { description, category, price, type } = transaction

    const response = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date().toISOString(),
    })

    setTransacations((prev) => [response.data, ...prev])
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransacationContext.Provider
      value={{ transacations, getTransactions, createNewTransaction }}
    >
      {children}
    </TransacationContext.Provider>
  )
}
