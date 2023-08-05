import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
  }

  body {
    color: ${({ theme }) => theme['gray-100']};
    background: ${({ theme }) => theme['gray-800']};
  }

  body, input, select, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  img {
    display: block;
  }
`
