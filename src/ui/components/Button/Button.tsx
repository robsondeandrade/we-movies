import { IButtonProps } from './Button.types'
import * as S from './Button.styled'

export const Button = ({
    onClick,
    children,
    width = '100%',
    height = '40px',
    background = '#009EDD',
}: IButtonProps) => {
    return (
        <S.Button
            onClick={onClick}
            width={width}
            height={height}
            background={background}
        >
            {children}
        </S.Button>
    )
}
