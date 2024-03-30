import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 700;
    @media (min-width: 769px) {
        display: none;
    }
`

export const BoxDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const TextTitle = styled.span`
    font-size: 0.875rem;
    width: 80%;
`

export const ContentInfoQuantity = styled.div`
    display: flex;
    height: 82px;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
`

export const ContentInfoValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`

export const BoxValue = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1rem 0;
    span {
        white-space: nowrap;
    }
`

export const Text = styled.span`
    font-weight: 700;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[500]};
`

export const BoxSubtotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`
