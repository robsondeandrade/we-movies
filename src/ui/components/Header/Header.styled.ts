import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    height: 88px;
    max-width: 1048px;
    @media (max-width: 1048px) {
        padding: 0 1rem;
    }
`

export const BoxCart = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
`

export const ContentCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const TitleLink = styled(Link)`
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
`

export const Text = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`
