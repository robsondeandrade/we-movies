import { Counter } from '../Counter'
import { TMutateFunction } from './CheckoutSummary.types'
import { IMovie } from '@/data/@types/global.types'
import * as S from './CheckoutSummary.styled'
import { DeleteIcon } from '../Icons'
import { formatCurrency } from '@/data/utils/formatCurrency'

export const getColumns = (changeMovieQuantity: TMutateFunction) => [
    {
        id: 'product',
        title: 'PRODUTO',
        style: { width: '30%' },
        renderer: (movie: IMovie) => (
            <S.ContentProduct>
                <img
                    width={91}
                    height={114}
                    src={movie.image}
                    alt={`Imagem de ${movie.title}`}
                />
                <S.BoxDescription>
                    <S.TextTitle>{movie.title}</S.TextTitle>
                    <S.Description>R${formatCurrency(movie.price)}</S.Description>
                </S.BoxDescription>
            </S.ContentProduct>
        ),
    },

    {
        id: 'quantity',
        title: 'QTD',
        style: { width: '35%' },
        renderer: (movie: IMovie) => (
            <Counter
                increaseQuantity={() =>
                    changeMovieQuantity({ movieId: movie.id, change: 'increase' })
                }
                decreaseQuantity={() =>
                    changeMovieQuantity({ movieId: movie.id, change: 'decrease' })
                }
                value={movie.quantity}
            />
        ),
    },

    {
        id: 'subtotal',
        title: 'SUBTOTAL',
        style: { width: '25%' },
        renderer: (movie: IMovie) => (
            <S.Description>R${formatCurrency(movie.price * movie.quantity)}</S.Description>
        ),
    },

    {
        id: 'remove',
        title: '',
        style: { width: '5%' },
        renderer: (movie: IMovie) => (
            <S.BoxRemove>
                <DeleteIcon
                    onClick={() => changeMovieQuantity({ movieId: movie.id, change: 'remove' })}
                />
            </S.BoxRemove>
        ),
    },
]
