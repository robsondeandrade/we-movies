export interface IColumn {
    id: string
    title: string
    renderer: (item: T) => React.ReactNode
    style?: React.CSSProperties
}

export interface ITableProps {
    data?: IMovie[]
    columns: IColumn[]
    uniqueKey: 'id'
}
