import styled from 'styled-components'
import { MdDelete } from 'react-icons/md'

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    align-items: flex-start;
    justify-content: space-between;
    font-weight: 700;
    @media (min-width: 768px) {
        display: none;
    }
`

export const BoxDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

export const ContentInfoHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 1rem;
`

export const ContentInfoValue = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
`

export const BoxValue = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1.5rem 1rem;
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
    margin-right: 1rem;
`

export const IconDelete = styled(MdDelete)`
    width: 26px;
    height: 26px;
    color: ${({ theme }) => theme.colors.blue};
`
