import { useNavigate } from 'react-router-dom'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { ShoppingBagIcon } from '../Icons'
import { useMovies } from '@/data/hooks/useMovies'
import * as S from './Header.styled'

export const Header = () => {
    const navigate = useNavigate()
    const { moviesInCart, setSearchTerm } = useMovieStore()
    const { refetch } = useMovies()

    const redirectToCartPage = () => navigate('/carrinho')

    const handleLogoClick = () => {
        setSearchTerm('')
        refetch()
    }

    return (
        <S.Container>
            <S.TitleLink
                onClick={handleLogoClick}
                to='/'
            >
                WeMovies
            </S.TitleLink>
            <S.BoxCart onClick={redirectToCartPage}>
                <S.ContentCart>
                    <S.Text>Meu Carrinho</S.Text>
                    <S.TextQuantity>{moviesInCart.length || 0} itens</S.TextQuantity>
                </S.ContentCart>
                <ShoppingBagIcon />
            </S.BoxCart>
        </S.Container>
    )
}
