'use client'
import { Button } from '../Button'
import * as S from './ContainerFeedback.styled'

interface StateContainerProps {
    width: string
    title: string
    height: string
    imageUrl: string
    buttonText: string
    fitType: 'cover' | 'contain'
    onButtonClick: () => void
}
export interface IStyledImageWrapperProps {
    width: string
    height: string
    fitType: 'contain' | 'cover'
}

export const ContainerFeedback = ({
    width,
    title,
    height,
    imageUrl,
    fitType,
    buttonText,
    onButtonClick,
}: StateContainerProps) => {
    return (
        <S.Container>
            <h2>{title}</h2>
            <S.ImageWrapper
                width={width}
                height={height}
                fitType={fitType}
            >
                <img
                    src={imageUrl}
                    alt={title}
                />
            </S.ImageWrapper>
            <Button
                onClick={onButtonClick}
                width='173px'
            >
                {buttonText}
            </Button>
        </S.Container>
    )
}
