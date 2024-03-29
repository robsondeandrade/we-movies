import { useNavigate } from 'react-router-dom'
import { ShoppingBagIcon } from '../Icons'
import * as S from './Header.styled'

export const Header = () => {
    const navigate = useNavigate()
    const handleCartClick = () => {
        navigate('/carrinho')
    }
    return (
        <S.Container>
            <S.TitleLink to='/'>WeMovies</S.TitleLink>
            <S.BoxCart onClick={handleCartClick}>
                <S.ContentCart>
                    <S.Text>Meu Carrinho</S.Text>
                    <span>0 itens</span>
                </S.ContentCart>
                <ShoppingBagIcon />
            </S.BoxCart>
        </S.Container>
    )
}
