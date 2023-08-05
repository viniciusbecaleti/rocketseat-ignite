import { useContext } from 'react'
import { TransacationContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  const context = useContext(TransacationContext)
  return context
}
