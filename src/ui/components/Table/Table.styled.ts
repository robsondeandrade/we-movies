import styled from 'styled-components'

export const Container = styled.table`
    margin: auto;
    max-width: 1048px;
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    table-layout: fixed;

    th,
    th {
        color: ${({ theme }) => theme.colors.gray[500]};
    }

    th,
    td {
        text-align: left;
        padding-bottom: 1.75rem;
    }

    @media (max-width: 767px) {
        display: none;
    }
`
