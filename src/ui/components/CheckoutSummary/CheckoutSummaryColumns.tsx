import { MdDelete } from 'react-icons/md'
import { Counter } from '../Counter'
import * as S from './CheckoutSummary.styled'
import { IMovie } from '@/data/services/MovieService/type'

export const columns = [
    {
        id: 'product',
        title: 'PRODUTO',
        style: { width: '45%' },
        renderer: (product: IMovie) => (
            <S.ContentProduct>
                <img
                    width={91}
                    height={114}
                    src={product.image}
                    alt={product.title}
                />
                <S.BoxDescription>
                    <S.Description>{product.title}</S.Description>
                    <S.Description>R${product.price}</S.Description>
                </S.BoxDescription>
            </S.ContentProduct>
        ),
    },
    {
        id: 'quantity',
        title: 'QTD',
        style: { width: '25%' },
        renderer: () => (
            <Counter
                onValueChange={() => {}}
                value={1}
            />
        ),
    },
    {
        id: 'subtotal',
        title: 'SUBTOTAL',
        style: { width: '20%' },
        renderer: (product: IMovie) => (
            <S.Description>${(product.price * product.quantityInCart).toFixed(2)}</S.Description>
        ),
    },
    {
        id: 'remove',
        title: '',
        style: { width: '10%' },
        renderer: () => (
            <S.BoxRemove>
                <MdDelete />
            </S.BoxRemove>
        ),
    },
]
