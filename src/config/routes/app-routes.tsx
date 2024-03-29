import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATHS } from './paths'
import { HomePage } from '@/page/HomePage'
import { Header } from '@/ui/components/Header'

export const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route
                element={<HomePage />}
                path='/'
            />

            {PATHS.map(({ element, path }) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />
            ))}
        </Routes>
    </BrowserRouter>
)
