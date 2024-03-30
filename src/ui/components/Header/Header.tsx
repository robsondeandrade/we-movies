import { useNavigate } from 'react-router-dom'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { ShoppingBagIcon } from '../Icons'
import * as S from './Header.styled'

export const Header = () => {
    const navigate = useNavigate()
    const { cartItems } = useMovieStore()

    const redirectToCartPage = () => {
        navigate('/carrinho')
    }

    return (
        <S.Container>
            <S.TitleLink to='/'>WeMovies</S.TitleLink>
            <S.BoxCart onClick={redirectToCartPage}>
                <S.ContentCart>
                    <S.Text>Meu Carrinho</S.Text>
                    <S.TextQuantity>{cartItems?.length} itens</S.TextQuantity>
                </S.ContentCart>
                <ShoppingBagIcon />
            </S.BoxCart>
        </S.Container>
    )
}
