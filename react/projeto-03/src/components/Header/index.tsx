import * as Dialog from '@radix-ui/react-dialog'
import { Container, Content, NewTransacationButton } from './styles'

import logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <Container>
      <Content>
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransacationButton type="button">
              Nova transação
            </NewTransacationButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </Content>
    </Container>
  )
}
