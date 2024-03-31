export interface IButtonProps {
    onClick: () => void
    width?: string
    height?: string
    children: ReactNode
    background?: string
    disabled?: boolean
}

export interface IStyledButtonProps {
    width: string
    height: string
    $background: string
}
