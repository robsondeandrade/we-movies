import { IButtonProps } from './Button.types'
import * as S from './Button.styled'

export const Button = ({
    onClick,
    children,
    width = '100%',
    height = '40px',
    disabled = false,
    background = '#009EDD',
}: IButtonProps) => {
    return (
        <S.Button
            width={width}
            height={height}
            onClick={onClick}
            disabled={disabled}
            $background={background}
        >
            {children}
        </S.Button>
    )
}
