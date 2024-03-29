import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0; 
    padding: 0; 
  }
`

export default GlobalStyle
