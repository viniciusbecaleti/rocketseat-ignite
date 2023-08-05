import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'

import { Container } from './styles'

import { useTransactions } from '../../../../hooks/useTransactions'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { getTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransacations(data: SearchFormInputs) {
    await getTransactions(data.query)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransacations)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </Container>
  )
}
