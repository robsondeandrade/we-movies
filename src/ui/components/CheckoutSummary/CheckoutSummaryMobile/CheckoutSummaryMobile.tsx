import { useCartMovies } from '@/data/hooks/useCartMovies'
import { formatCurrency } from '@/data/utils/formatCurrency'
import { Counter } from '../../Counter'
import { ICardMovieProps } from '../CheckoutSummary.types'
import * as S from './CheckoutSummary.styled'

export function CheckoutSummaryMobile({ movie }: ICardMovieProps) {
    const { changeMovieQuantity } = useCartMovies()
    const { id, image, title, price, quantity } = movie

    const handleIncreaseQuantity = () => changeMovieQuantity({ movieId: id, change: 'increase' })
    const handleDecreaseQuantity = () => changeMovieQuantity({ movieId: id, change: 'decrease' })
    const handleRemoveItem = () => changeMovieQuantity({ movieId: id, change: 'remove' })

    return (
        <S.Container>
            <img
                src={image}
                alt={`Imagem do filme ${title}`}
                width={64}
                height={82}
            />
            <S.BoxDetails>
                <S.ContentInfoHeader>
                    <span>{title}</span>
                    <S.BoxValue>
                        <span>R$ {formatCurrency(price)}</span>
                        <button
                            onClick={handleRemoveItem}
                            aria-label={`Remover ${title} do carrinho`}
                        >
                            <S.IconDelete />
                        </button>
                    </S.BoxValue>
                </S.ContentInfoHeader>

                <S.ContentInfoValue>
                    <Counter
                        increaseQuantity={handleIncreaseQuantity}
                        decreaseQuantity={handleDecreaseQuantity}
                        value={quantity}
                    />
                    <S.BoxSubtotal>
                        <S.Text>SUBTOTAL</S.Text>
                        <span>R$ {formatCurrency(price * quantity)}</span>
                    </S.BoxSubtotal>
                </S.ContentInfoValue>
            </S.BoxDetails>
        </S.Container>
    )
}
