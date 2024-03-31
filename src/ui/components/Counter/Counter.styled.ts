import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`

export const CountButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextQuantity = styled.span`
    font-weight: 400;
`

export const BoxQuantity = styled.div`
    padding: 1.5px 0;
    width: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 4px;
    outline: none;
    font-size: 14px;

    @media (max-width: 768px) {
        width: 59px;
    }
`
