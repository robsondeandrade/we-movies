import { Button } from '../Button'
import * as S from './ContainerFeedback.styled'

interface StateContainerProps {
    width: string
    title: string
    height: string
    imageUrl: string
    buttonText: string
    onButtonClick: () => void
    fitType: 'cover' | 'contain'
}
export interface IStyledImageWrapperProps {
    width: string
    height: string
    $fitType: 'contain' | 'cover'
}

export const ContainerFeedback = ({
    width,
    title,
    height,
    fitType,
    imageUrl,
    buttonText,
    onButtonClick,
}: StateContainerProps) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.ImageWrapper
                width={width}
                height={height}
                $fitType={fitType}
            >
                <img
                    alt={title}
                    src={imageUrl}
                />
            </S.ImageWrapper>
            <Button
                width='173px'
                onClick={onButtonClick}
            >
                {buttonText}
            </Button>
        </S.Container>
    )
}
