export interface IButtonProps {
    onClick: () => void
    width?: string
    height?: string
    children: ReactNode
    background?: string
}

export interface IStyledButtonProps {
    width: string
    height: string
    background: string
}
