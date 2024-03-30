interface DeleteIconProps {
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
    isSmall?: boolean
    color?: string
}

export const DeleteIcon = ({ onClick, isSmall = false, color = '#009EDD' }: DeleteIconProps) => {
    const width = isSmall ? '16' : '18'
    const viewBox = isSmall ? '0 0 16 18' : '0 0 18 18'
    const pathD = isSmall
        ? 'M1.14286 16C1.14286 17.1 2.17143 18 3.42857 18H12.5714C13.8286 18 14.8571 17.1 14.8571 16V4H1.14286V16ZM16 1H12L10.8571 0H5.14286L4 1H0V3H16V1Z'
        : 'M1.28571 16C1.28571 17.1 2.44286 18 3.85714 18H14.1429C15.5571 18 16.7143 17.1 16.7143 16V4H1.28571V16ZM18 1H13.5L12.2143 0H5.78571L4.5 1H0V3H18V1Z'

    return (
        <svg
            width={width}
            height='18'
            viewBox={viewBox}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <path
                d={pathD}
                fill={color}
            />
        </svg>
    )
}
