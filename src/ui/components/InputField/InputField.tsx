import { IInputFieldProps } from './InputField.type'
import * as S from './InputField.styled'

export const InputField = ({ placeholder }: IInputFieldProps) => {
    return (
        <S.Container>
            <S.Input placeholder={placeholder} />
            <S.SearchIcon size='20px' />
        </S.Container>
    )
}
