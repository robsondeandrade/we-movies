import { CgAdd } from 'react-icons/cg'
import { BiMinusCircle } from 'react-icons/bi'
import { ICounterProps } from './Counter.type'
import * as S from './Counter.styled'

export const Counter = ({ value = 1, onValueChange }: ICounterProps) => {
    return (
        <S.Container>
            <S.CountButton
                onClick={() => value !== 1 && onValueChange(value - 1)}
                aria-label='Diminuir'
            >
                <BiMinusCircle />
            </S.CountButton>

            <S.InputNumber>{value}</S.InputNumber>

            <S.CountButton
                onClick={() => onValueChange(value + 1)}
                aria-label='Aumentar'
            >
                <CgAdd />
            </S.CountButton>
        </S.Container>
    )
}
