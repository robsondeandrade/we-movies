import { Table } from '../Table'
import { Button } from '../Button'
import { columns } from './CheckoutSummaryColumns'
import { ContainerFeedback } from '../ContainerFeedback'
import { CheckoutSummaryMobile } from './CheckoutSummaryMobile'
import { useNavigate } from 'react-router-dom'
import { useCartMovies } from '@/data/hooks/useCartMovies'
import * as S from './CheckoutSummary.styled'

export const CheckoutSummary = () => {
    const navigate = useNavigate()
    const { cartMovies } = useCartMovies()
    console.log('cartMovies', cartMovies)
    const handleCartClick = () => {
        navigate('/compra-realizada')
    }

    if (cartMovies?.length === 0) {
        return (
            <ContainerFeedback
                fitType='cover'
                width={'449px'}
                height={'265px'}
                title='Parece que não há nada por aqui :('
                imageUrl='/images/empty-state.png'
                buttonText='Recarregar página'
                onButtonClick={() => {}}
            />
        )
    }

    return (
        <S.Container>
            <Table
                data={cartMovies}
                columns={columns}
                uniqueKey='id'
            />
            <CheckoutSummaryMobile />
            <S.ContentOrder>
                <S.ContentButton>
                    <Button onClick={handleCartClick}>FINALIZAR PEDIDO</Button>
                </S.ContentButton>
                <S.BoxValue>
                    <S.Text>TOTAL</S.Text>
                    <S.TextTotalValue>R$ 29,90</S.TextTotalValue>
                </S.BoxValue>
            </S.ContentOrder>
        </S.Container>
    )
}
