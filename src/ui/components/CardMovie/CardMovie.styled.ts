import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 21.1rem;
    padding: 1rem;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 20.5rem;
    }
`

export const Title = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
`

export const BoxQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
`

export const TextQuantity = styled.span`
    font-weight: 400;
    font-size: 0.75rem;
`

export const TextPrice = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
`
