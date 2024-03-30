import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin: 0 auto 2.5rem;
    max-width: 1048px;
    border-radius: 4px;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 1048px) {
        margin: 0 1rem;
    }
`
export const ContainerLoading = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContentProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 91px;
        height: auto;
    }
`

export const Description = styled.span`
    font-weight: 700;
`

export const Text = styled.span`
    font-weight: 700;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.gray[500]};
`

export const TextTotalValue = styled.span`
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 2rem;
`

export const BoxDescription = styled.div`
    display: flex;
    flex-direction: column;
`

export const BoxRemove = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    svg {
        width: 26px;
        height: 26px;
        color: ${({ theme }) => theme.colors.blue};
    }
`

export const ContentOrder = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray[500]};
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const ContentButton = styled.div`
    width: 10.81rem;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const BoxValue = styled.div`
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;
    }
`
