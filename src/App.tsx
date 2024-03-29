import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './config/routes/app-routes'
import GlobalStyle from './ui/styles/globalStyle'
import theme from './ui/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <AppRoutes />
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
