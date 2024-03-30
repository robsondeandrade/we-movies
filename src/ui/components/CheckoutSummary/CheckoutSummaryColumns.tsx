import { MdDelete } from 'react-icons/md'
import { Counter } from '../Counter'
import { TMutateFunction } from './CheckoutSummary.types'
import { IMovie } from '@/data/@types/global.types'
import * as S from './CheckoutSummary.styled'

export const getColumns = (changeMovieQuantity: TMutateFunction) => [
    {
        id: 'product',
        title: 'PRODUTO',
        style: { width: '45%' },
        renderer: (movie: IMovie) => (
            <S.ContentProduct>
                <img
                    width={91}
                    height={114}
                    src={movie.image}
                    alt={`Imagem de ${movie.title}`}
                />
                <S.BoxDescription>
                    <S.Description>{movie.title}</S.Description>
                    <S.Description>R${movie.price}</S.Description>
                </S.BoxDescription>
            </S.ContentProduct>
        ),
    },

    {
        id: 'quantity',
        title: 'QTD',
        style: { width: '25%' },
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
        style: { width: '20%' },
        renderer: (movie: IMovie) => (
            <S.Description>${(movie.price * movie.quantity).toFixed(2)}</S.Description>
        ),
    },

    {
        id: 'remove',
        title: '',
        style: { width: '10%' },
        renderer: (movie: IMovie) => (
            <S.BoxRemove>
                <MdDelete
                    onClick={() => changeMovieQuantity({ movieId: movie.id, change: 'remove' })}
                />
            </S.BoxRemove>
        ),
    },
]
