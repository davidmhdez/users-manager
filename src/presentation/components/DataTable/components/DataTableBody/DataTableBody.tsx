import React, {useId} from 'react';
import {TableBody, TableCell, TableRow} from "@mui/material";
import tableLabels from "../../tableLabels";

type Props = {
    headers: string[]
    data: any[]
}

const DataTableBody: React.FC<Props> = ({headers, data}) => {
    const tableId = useId();
    return (
        <TableBody>
            {data.length === 0
                ?   <TableRow>
                        <TableCell sx={{textAlign: "center"}} colSpan={headers.length}>{tableLabels.noResultsLabel}</TableCell>
                    </TableRow>
                : data.map((row, rowIndex) =>(
                    <TableRow key={tableId + '-row-' + rowIndex + Date.now()}>
                        {Object.values(row).map((col: any, colIndex) => (
                            <TableCell key={tableId + '-row-' + rowIndex + '-col-' + colIndex}>{col}</TableCell>
                        ))}
                    </TableRow>
                ))
            }
        </TableBody>
    );
};

export default DataTableBody;