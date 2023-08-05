import styled from 'styled-components'

export const Container = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 73rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransacationButton = styled.button`
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.1s;
  }
`
