import styled from 'styled-components'
import { IStyledButtonProps } from './Button.type'

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
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
`
