import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 73rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.article<SummaryCardProps>`
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  strong {
    display: block;
    margin-top: 0.75rem;
    font-size: 2rem;
  }

  ${({ theme, variant }) =>
    variant === 'green' &&
    css`
      background: ${theme['green-700']};
    `}
`
