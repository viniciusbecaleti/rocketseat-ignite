import { PriceHighlight, Table, Transactions } from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { useTransactions } from '../../hooks/useTransactions'

import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Home() {
  const { transacations } = useTransactions()

  return (
    <>
      <Header />
      <Summary />

      <Transactions>
        <SearchForm />

        <Table>
          <tbody>
            {transacations.map((transaction) => (
              <tr key={transaction.id}>
                <td width="47.5%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Transactions>
    </>
  )
}
