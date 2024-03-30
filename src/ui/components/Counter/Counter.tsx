import { CgAdd } from 'react-icons/cg'
import { BiMinusCircle } from 'react-icons/bi'
import { ICounterProps } from './Counter.types'
import * as S from './Counter.styled'

export const Counter = ({ value, decreaseQuantity, increaseQuantity }: ICounterProps) => {
    return (
        <S.Container>
            <S.CountButton
                onClick={decreaseQuantity}
                aria-label='Diminuir'
            >
                <BiMinusCircle />
            </S.CountButton>

            <S.InputNumber>{value}</S.InputNumber>

            <S.CountButton
                onClick={increaseQuantity}
                aria-label='Aumentar'
            >
                <CgAdd />
            </S.CountButton>
        </S.Container>
    )
}
