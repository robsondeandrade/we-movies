import { ITableProps } from './Table.types'
import * as S from './Table.styled'

export const Table = ({ data, columns, uniqueKey }: ITableProps) => {
    return (
        <S.Container>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.id}
                            style={column.style}
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data?.map((item) => (
                    <tr key={item[uniqueKey]}>
                        {columns.map((column) => (
                            <td
                                key={`${column.id}-${item[uniqueKey]}`}
                                style={column.style}
                            >
                                {column.renderer(item)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </S.Container>
    )
}
