import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
      opacity: 1;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 0.875rem 2rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['green-300']};
    background: none;

    color: ${({ theme }) => theme['green-300']};
    font-weight: 700;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition:
        background-color 0.15s,
        border-color 0.15s,
        color 0.15s;
    }
  }
`
