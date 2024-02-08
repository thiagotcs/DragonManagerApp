import { Button } from '@components/atoms/Button'
import { TableCell, TableRow } from '@components/atoms/Table'
import { Edit, Search, Trash2 } from 'lucide-react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function DragonTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell w={'1px'}></TableCell>
        <TableCell w={'64px'}>
          <Button disabled variant="ghost">
            <Search />
          </Button>
        </TableCell>
        <TableCell w={'140px'}>
          <Skeleton width={'100px'} />
        </TableCell>
        <TableCell w={'180px'}>
          <Skeleton width={'100px'} />
        </TableCell>
        <TableCell>
          <Skeleton width={'100px'} />
        </TableCell>
        <TableCell w={'180px'}>
          <Skeleton width={'100px'} />
        </TableCell>
        <TableCell w={'64px'}>
          <Button variant="ghost" disabled>
            <Edit />
          </Button>
        </TableCell>
        <TableCell w={'64px'}>
          <Button variant="ghost" disabled>
            <Trash2 />
          </Button>
        </TableCell>
      </TableRow>
    )
  })
}
