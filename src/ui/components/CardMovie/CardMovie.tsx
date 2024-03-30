import { useTheme } from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md'
import { formatCurrency } from '@/data/utils/formatCurrency'
import { useCartMovies } from '@/data/hooks/useCartMovies'
import { Button } from '../Button'
import { ICardMovieProps } from './CardMovie.types'
import * as S from './CardMovie.styled'

export const CardMovie = ({ movie }: ICardMovieProps) => {
    const { colors } = useTheme()
    const { cartMovies, addMovieToCart } = useCartMovies()
    const { id, image, title, price } = movie
    const movieInCart = cartMovies?.find((cartItem) => cartItem.id === id)
    const quantity = movieInCart?.quantity || 0
    const buttonBackground = movieInCart ? colors.success : colors.blue

    return (
        <S.Container>
            <img
                src={image}
                width={147}
                height={188}
                alt={`Imagem do filme ${title}`}
            />

            <S.Title>{title}</S.Title>
            <S.TextPrice>R$ {formatCurrency(price)}</S.TextPrice>

            <Button
                background={buttonBackground}
                onClick={() => addMovieToCart(movie)}
            >
                <S.BoxQuantity>
                    <MdAddShoppingCart size={13.6} />
                    <S.TextQuantity>{quantity}</S.TextQuantity>
                </S.BoxQuantity>
                ADICIONAR AO CARRINHO
            </Button>
        </S.Container>
    )
}
