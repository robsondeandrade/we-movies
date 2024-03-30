import { CgAdd } from 'react-icons/cg'
import { useTheme } from 'styled-components'
import { BiMinusCircle } from 'react-icons/bi'
import { ICounterProps } from './Counter.types'
import * as S from './Counter.styled'

export const Counter = ({ value, decreaseQuantity, increaseQuantity }: ICounterProps) => {
    const { colors } = useTheme()

    return (
        <S.Container>
            <S.CountButton
                onClick={decreaseQuantity}
                aria-label='Diminuir'
            >
                <BiMinusCircle
                    color={colors.blue}
                    size='18px'
                    viewBox='2 2 20 20'
                />
            </S.CountButton>

            <S.BoxQuantity>
                <S.TextQuantity>{value}</S.TextQuantity>
            </S.BoxQuantity>

            <S.CountButton
                onClick={increaseQuantity}
                aria-label='Aumentar'
            >
                <CgAdd
                    color={colors.blue}
                    size='18px'
                    viewBox='2 2 20 20'
                />
            </S.CountButton>
        </S.Container>
    )
}
