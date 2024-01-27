import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import {
  ButtonStyled,
  PageIndicator,
  PaginationContainer,
  PaginationControls,
  TotalCountSpan,
} from './styles'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (newPageIndex: number) => void
  totalPages: number
}

export function Pagination({
  pageIndex,
  totalCount,
  onPageChange,
  totalPages,
}: PaginationProps) {
  const handleFirstPage = () => onPageChange(0)
  const handlePreviousPage = () => onPageChange(Math.max(0, pageIndex - 1))
  const handleNextPage = () =>
    onPageChange(Math.min(totalPages - 1, pageIndex + 1))
  const handleLastPage = () => onPageChange(totalPages - 1)
  return (
    <PaginationContainer>
      <TotalCountSpan>Total de {totalCount} item(s)</TotalCountSpan>

      <PaginationControls>
        <PageIndicator>
          Página {pageIndex + 1} de {totalPages}
        </PageIndicator>
        <div>
          <ButtonStyled
            variant="outline"
            onClick={handleFirstPage}
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="icon" />
          </ButtonStyled>
          <ButtonStyled
            variant="outline"
            onClick={handlePreviousPage}
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="icon" />
          </ButtonStyled>
          <ButtonStyled
            variant="outline"
            onClick={handleNextPage}
            disabled={pageIndex >= totalPages - 1}
          >
            <ChevronRight className="icon" />
          </ButtonStyled>
          <ButtonStyled
            variant="outline"
            onClick={handleLastPage}
            disabled={pageIndex >= totalPages - 1}
          >
            <ChevronsRight className="icon" />
          </ButtonStyled>
        </div>
      </PaginationControls>
    </PaginationContainer>
  )
}
