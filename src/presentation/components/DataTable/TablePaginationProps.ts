type TablePaginationProps = {
    page: number
    rowsPerPage: number
    hasMore: boolean
    onChangePage: (page: number) => void
}

export default TablePaginationProps