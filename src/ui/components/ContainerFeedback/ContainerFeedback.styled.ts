import styled from 'styled-components'
import { IStyledImageWrapperProps } from '.'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 2.5rem;
    max-width: 1048px;
    padding: 4rem;
    box-sizing: border-box;
    gap: 1.5rem;
    @media (max-width: 1048px) {
        margin: 0 1rem;
    }
`

export const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
`

export const ImageWrapper = styled.div<IStyledImageWrapperProps>`
    position: relative;
    max-width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'auto'};
    width: 100%;
    margin: auto;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: ${({ $fitType }) => $fitType};
        object-position: center;
    }
`
