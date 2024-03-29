import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 19.15rem;
    padding: 1rem;
    gap: 0.5rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.gray[800]};
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 18.5rem;
    }
`

export const BoxQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
`

export const TextPrice = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`
