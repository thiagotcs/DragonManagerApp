import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const StyledTableWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`
export const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
  border-collapse: collapse;
`

export const StyledTableHeader = styled.thead``

export const StyledTableBody = styled.tbody``

export const StyledTableFooter = styled.tfoot``

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #cdcdcd;
`

export const StyledTableHead = styled.th<{ width?: string }>`
  height: 44px;
  width: ${({ width }) => width || 'auto'};
  border-bottom: 1px solid #cdcdcd;
  text-align: left;
`

export const StyledTableCell = styled.td`
  height: 44px;
  width: ${({ width }) => width || 'auto'};
  font-family: 'Roboto', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: left;
  color: #5a645a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  button {
    margin: 0 auto;
  }
`

export const StyledTableCaption = styled.caption`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;
`
