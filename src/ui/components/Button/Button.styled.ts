import styled from 'styled-components'
import { IStyledButtonProps } from './Button.types'

export const Button = styled.button<IStyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.75rem;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    gap: 0.75rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ $background }) => $background};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    transition: filter 0.3s ease;

    &:hover {
        filter: saturate(80%);
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray[300]};
        cursor: not-allowed;
        filter: none;
    }
`
