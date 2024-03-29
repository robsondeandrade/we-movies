import { Counter } from '../../Counter'
import * as S from './CheckoutSummary.styled'

export function CheckoutSummaryMobile() {
    return (
        <S.Container>
            <img
                src='https://wefit-react-web-test.s3.amazonaws.com/spider-man.png'
                alt=''
                width={64}
                height={82}
            />
            <S.BoxDetails>
                <S.ContentInfoHeader>
                    <span>Homen Aranha</span>
                    <S.BoxValue>
                        <span>R$ 29,00</span>
                        <S.IconDelete />
                    </S.BoxValue>
                </S.ContentInfoHeader>
                <S.ContentInfoValue>
                    <Counter
                        onValueChange={() => {}}
                        value={1}
                    />
                    <S.BoxSubtotal>
                        <S.Text>SUBTOTAL</S.Text>
                        <span>R$ 20,00</span>
                    </S.BoxSubtotal>
                </S.ContentInfoValue>
            </S.BoxDetails>
        </S.Container>
    )
}
