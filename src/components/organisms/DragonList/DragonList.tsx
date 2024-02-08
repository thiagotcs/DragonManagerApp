import { orderByArray } from '@/utils/functions'
import { Pagination } from '@components/atoms/Pagination'
import { GetDragon } from '@services/DragonService'
import { ChangeEvent, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useQuery } from 'react-query'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/atoms/Table'
import { SearchInput } from '@components/molecules/SearchInput'
import { DragonTableRow } from './DragonTableRow'
import { DragonTableSkeleton } from './DragonTableSkeleton'
import { Container, Content, FormStyled } from './styles'

export function DragonList() {
  const { data, isLoading: isLoadingDragon } = useQuery('dragon', GetDragon)
  const perPage = 10
  const [pageIndex, setPageIndex] = useState(0)
  const [searchItem, setSearchItem] = useState('')

  const sortedData = useMemo(() => {
    return data ? orderByArray(data) : []
  }, [data])

  const filteredData = useMemo(() => {
    return sortedData.filter(
      (dragon) =>
        dragon.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        dragon.type.toLowerCase().includes(searchItem.toLowerCase()),
    )
  }, [sortedData, searchItem])

  const paginatedData = useMemo(() => {
    const start = pageIndex * perPage
    const end = start + perPage
    return filteredData.slice(start, end)
  }, [filteredData, pageIndex, perPage])

  const totalPages = Math.ceil(filteredData.length / perPage)

  const handlePageChange = (newPageIndex: number) => {
    setPageIndex(newPageIndex)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value)
    setPageIndex(0)
  }

  return (
    <>
      <Helmet title=">Explorar Dragões" />
      <Container>
        <h1>Explorar Dragões</h1>
      </Container>
      <div>
        <FormStyled>
          <SearchInput value={searchItem} onChange={handleSearchChange} />
        </FormStyled>
        <Content>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead w={'1px'}></TableHead>
                <TableHead w={'64px'}></TableHead>
                <TableHead w={'64px'}>Id</TableHead>
                <TableHead w={'140px'}>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead w={'140px'}>Data</TableHead>
                <TableHead w={'64px'}></TableHead>
                <TableHead w={'64px'}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoadingDragon && <DragonTableSkeleton />}
              {paginatedData.map(({ id, name, createdAt, type }) => {
                return (
                  <DragonTableRow
                    key={id}
                    id={id}
                    name={name}
                    createdAt={createdAt}
                    type={type}
                  />
                )
              })}
            </TableBody>
          </Table>
        </Content>
        <Pagination
          pageIndex={pageIndex}
          totalCount={sortedData.length}
          perPage={perPage}
          onPageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </>
  )
}
