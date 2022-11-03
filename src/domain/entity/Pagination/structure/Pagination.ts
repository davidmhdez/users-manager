type Pagination = {
    data: any[]
    page: number
    perPage: number
    hasMore: boolean
    isLoading: boolean
    onChangePage: (page: number) => void
}

export default Pagination