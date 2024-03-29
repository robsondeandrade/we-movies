import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 2.5rem;
    max-width: 1048px;
    gap: 1rem;
    @media (max-width: 1048px) {
        padding: 0 1rem;
    }
`

export const ContentMovie = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`
