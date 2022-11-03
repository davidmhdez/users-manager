import React from 'react';
import {Grid, IconButton, Typography} from "@mui/material";
import TablePaginationProps from "../../TablePaginationProps";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import tableLabels from "../../tableLabels";

type Props = {
    dataResults: number
    hasMore: boolean
} & TablePaginationProps

const DataTablePagination: React.FC<Props> = ({page, rowsPerPage, dataResults, onChangePage, hasMore}) => {
    if(!dataResults) return null;

    // calculate results range
    const from = page === 1 ? 1 : ((page - 1) * rowsPerPage) + 1;
    const to = dataResults < rowsPerPage ? (from + dataResults) - 1 : (from + rowsPerPage) - 1;

    return (
        <Grid sx={{display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "8px"}}>
            <Typography mr={1} variant="caption">{`${tableLabels.fromLabel} ${from} ${tableLabels.toLabel} ${to} ${tableLabels.resultsLabel}`}</Typography>
            <IconButton disabled={page === 1} onClick={() => onChangePage(page - 1)} aria-label="prev">
                <NavigateBefore/>
            </IconButton>
            <IconButton disabled={!hasMore} onClick={() => onChangePage(page + 1)} aria-label="next">
                <NavigateNext/>
            </IconButton>
        </Grid>
    );
};

export default DataTablePagination;