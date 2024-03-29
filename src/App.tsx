import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './config/routes/app-routes'
import GlobalStyle from './ui/styles/globalStyle'
import theme from './ui/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppRoutes />
        </ThemeProvider>
    )
}

export default App
