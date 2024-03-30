import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background: white;
    border-radius: 8px;
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.blue};
    }
`

export const SearchIcon = styled(MdSearch)`
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
`
