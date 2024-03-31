import { useNavigate } from 'react-router-dom'
import { ContainerFeedback } from '../ContainerFeedback'
import { CheckoutSummaryMobile } from './CheckoutSummaryMobile'
import { useCartMovies } from '@/data/hooks/useCartMovies'
import { LoadingOverlay } from '../LoadingOverlay'
import { Button } from '../Button'
import { Table } from '../Table'
import { getColumns } from './CheckoutSummaryColumns'
import { useMovieStore } from '@/data/stores/useMovieStore'
import { formatCurrency } from '@/data/utils/formatCurrency'
import * as S from './CheckoutSummary.styled'

export const CheckoutSummary = () => {
    const navigate = useNavigate()
    const { totalAmountDue, moviesInCart } = useMovieStore()
    const {
        finalizePurchase,
        isLoadingCartMovies,
        changeMovieQuantity,
        isLoadingFinalizePurchase,
    } = useCartMovies()

    const columns = getColumns(changeMovieQuantity)

    const handleFinalizePurchase = () => {
        finalizePurchase()
    }

    if (isLoadingCartMovies) {
        return (
            <S.ContainerLoading>
                <LoadingOverlay />
            </S.ContainerLoading>
        )
    }

    if (!moviesInCart || moviesInCart?.length === 0) {
        return (
            <ContainerFeedback
                fitType='cover'
                width={'449px'}
                height={'265px'}
                title='Parece que não há nada por aqui :('
                imageUrl='/images/empty-state.png'
                buttonText='Recarregar página'
                onButtonClick={() => navigate('/')}
            />
        )
    }

    return (
        <S.Container>
            <Table
                data={moviesInCart}
                columns={columns}
                uniqueKey='id'
            />
            {moviesInCart?.map((movie) => (
                <CheckoutSummaryMobile
                    movie={movie}
                    key={movie.id}
                />
            ))}

            <S.ContentOrder>
                <S.ContentButton>
                    <Button
                        onClick={handleFinalizePurchase}
                        disabled={isLoadingFinalizePurchase}
                    >
                        FINALIZAR PEDIDO
                    </Button>
                </S.ContentButton>
                <S.BoxValue>
                    <S.Text>TOTAL</S.Text>
                    <S.TextTotalValue>R$ {formatCurrency(totalAmountDue)}</S.TextTotalValue>
                </S.BoxValue>
            </S.ContentOrder>
        </S.Container>
    )
}
