import React from 'react'
import {
  StyledTable,
  StyledTableBody,
  StyledTableCaption,
  StyledTableCell,
  StyledTableFooter,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
  StyledTableWrapper,
} from './styles'

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

export const Table: React.FC<TableProps> = ({ children, ...props }) => (
  <StyledTableWrapper>
    <StyledTable {...props}>{children}</StyledTable>
  </StyledTableWrapper>
)

// TableHeader.tsx
interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  ...props
}) => <StyledTableHeader {...props}>{children}</StyledTableHeader>

// TableBody.tsx
interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => (
  <StyledTableBody {...props}>{children}</StyledTableBody>
)

// TableFooter.tsx
interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  ...props
}) => <StyledTableFooter {...props}>{children}</StyledTableFooter>

// TableRow.tsx
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRow: React.FC<TableRowProps> = ({
  children,

  ...props
}) => <StyledTableRow {...props}>{children}</StyledTableRow>

// TableHead.tsx
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  w?: string
}

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  w,
  ...props
}) => (
  <StyledTableHead width={w} {...props}>
    {children}
  </StyledTableHead>
)

// TableCell.tsx
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  w?: string
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  w,
  ...props
}) => (
  <StyledTableCell width={w} {...props}>
    {children}
  </StyledTableCell>
)

// TableCaption.tsx

interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {}

export const TableCaption: React.FC<TableCaptionProps> = ({
  children,
  ...props
}) => <StyledTableCaption {...props}>{children}</StyledTableCaption>
