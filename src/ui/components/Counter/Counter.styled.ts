import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`

export const CountButton = styled.div`
    cursor: pointer;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;

    svg {
        margin: auto;
        width: 1.3rem;
        height: 1.3rem;
        color: ${({ theme }) => theme.colors.blue};
    }
`

export const InputNumber = styled.div`
    padding: 2.6px 0;
    min-width: 3.77rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 4px;
    outline: none;
    font-size: 14px;
`
