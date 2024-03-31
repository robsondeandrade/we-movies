import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IInputFieldProps } from './InputField.type'
import * as S from './InputField.styled'

export const InputField = ({ placeholder, onSearch }: IInputFieldProps) => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const [inputValue, setInputValue] = useState(queryParams.get('search') || '')

    const handleSearch = () => {
        onSearch(inputValue)
        if (inputValue.trim() === '') {
            navigate(location.pathname)
        } else {
            navigate(`?search=${inputValue}`)
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSearch()
    }

    useEffect(() => {
        setInputValue(queryParams.get('search') || '')
    }, [location])

    return (
        <S.Container onSubmit={handleSubmit}>
            <S.Input
                value={inputValue}
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
