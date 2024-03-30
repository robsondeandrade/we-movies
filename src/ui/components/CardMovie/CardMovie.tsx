import { useTheme } from 'styled-components'
import { MdAddShoppingCart } from 'react-icons/md'
import { formatCurrency } from '@/data/utils/formatCurrency'
import { useCartMovies } from '@/data/hooks/useCartMovies'
import { Button } from '../Button'
import { ICardMovieProps } from './CardMovie.types'
import * as S from './CardMovie.styled'

export const CardMovie = ({ movie }: ICardMovieProps) => {
    const theme = useTheme()
    const { cartMovies, addMovieToCart } = useCartMovies()
    const { id, image, title, price, quantityInCart = 0 } = movie
    const isInCart = cartMovies?.some((movie) => movie.id === id)

    return (
        <S.Container>
            <img
                src={image}
                width={147}
                height={188}
                alt={`Imagem do filme ${title}`}
            />

            <span>{title}</span>
            <S.TextPrice>R$ {formatCurrency(price)}</S.TextPrice>

            <Button
                background={isInCart ? theme.colors.success : theme.colors.blue}
                onClick={() => addMovieToCart(movie)}
            >
                <S.BoxQuantity>
                    <MdAddShoppingCart size={13.6} />
                    <span>{quantityInCart}</span>
                </S.BoxQuantity>
                ADICIONAR AO CARRINHO
            </Button>
        </S.Container>
    )
}
