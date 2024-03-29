import { IButtonProps } from './Button.type'
import * as S from './Button.styled'

export const Button = ({ onClick, width = '100%', height = '40px', children }: IButtonProps) => {
    return (
        <S.Button
            onClick={onClick}
            width={width}
            height={height}
        >
            {children}
        </S.Button>
    )
}
