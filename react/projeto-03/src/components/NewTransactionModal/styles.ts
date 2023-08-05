import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 34rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme['gray-800']};

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
        opacity: 1;
      }
    }

    button[type='submit'] {
      padding: 1rem;
      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      font-weight: 700;
      cursor: pointer;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background-color 0.15s;
      }
    }
  }
`

export const CloseButton = styled.button`
  line-height: 0;
  border: none;
  background: none;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  color: ${({ theme }) => theme['gray-500']};
  cursor: pointer;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-block: 0.5rem 1.5rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-300']};

  padding: 1rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-700']};

  cursor: pointer;

  svg {
    color: ${({ theme, value }) =>
      value === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${({ theme, value }) =>
      value === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme['gray-600']};
  }
`
