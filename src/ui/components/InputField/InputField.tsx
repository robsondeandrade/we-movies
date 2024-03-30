import { IInputFieldProps } from './InputField.type'
import { useState } from 'react'
import * as S from './InputField.styled'

export const InputField = ({ placeholder, onSearch }: IInputFieldProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleSearch = () => {
        onSearch(inputValue)
    }

    return (
        <S.Container>
            <S.Input
                placeholder={placeholder}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleSearch}
            />
            <S.SearchIcon
                size='24px'
                onClick={handleSearch}
            />
        </S.Container>
    )
}
