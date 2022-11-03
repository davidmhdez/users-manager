import React from 'react';
import {Paper, Table, TableContainer} from "@mui/material";
import TableHeader from "./components/TableHeader";
import DataTableBody from "./components/DataTableBody";
import TablePaginationProps from "./TablePaginationProps";
import DataTablePagination from "./components/DataTablePagination";
import LoadingWrapper from "../LoadingWrapper";

type Props = {
    headers: string[]
    data: any[]
    pagination?: TablePaginationProps
    isLoading?: boolean
}

const DataTable: React.FC<Props> = ({pagination, data, isLoading, ...rest}) => {
    return (
        <Paper sx={{position: "relative"}}>
            <TableContainer>
                <Table>
                    <TableHeader {...rest}/>
                    <DataTableBody data={data} {...rest}/>
                </Table>
            </TableContainer>
            {pagination
                &&
                <DataTablePagination dataResults={data.length} {...pagination}/>
            }
            <LoadingWrapper isLoading={Boolean(isLoading)}/>
        </Paper>
    );
};

export default DataTable;