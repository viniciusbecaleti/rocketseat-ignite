import { useTheme } from 'styled-components'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { Container, SummaryCard } from './styles'

import { useTransactions } from '../../hooks/useTransactions'

import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const theme = useTheme()
  const { transacations } = useTransactions()

  const summary = transacations.reduce(
    (acc, transacation) => {
      if (transacation.type === 'income') {
        acc.income += transacation.price
        acc.total += transacation.price
      }

      if (transacation.type === 'outcome') {
        acc.outcome += transacation.price
        acc.total -= transacation.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <Container>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </Container>
  )
}
