import { ICardMovieProps } from './CardMovie.type'
import { formatCurrency } from '@/data/utils/formatCurrency'
import { MdAddShoppingCart } from 'react-icons/md'
import { Button } from '../Button'
import * as S from './CardMovie.styled'

export const CardMovie = ({ product }: ICardMovieProps) => {
    return (
        <S.Container>
            <img
                src={product?.image}
                width={147}
                height={188}
                alt='Imagem do filme'
            />

            <span>{product?.title}</span>
            <S.TextPrice>R$ {formatCurrency(product?.price)}</S.TextPrice>

            <Button onClick={() => {}}>
                <S.BoxQuantity>
                    <MdAddShoppingCart
                        width={13.6}
                        height={13.6}
                    />
                    <span>{product.quantityInCart || 0}</span>
                </S.BoxQuantity>
                ADICIONAR AO CARRINHO
            </Button>
        </S.Container>
    )
}
