import React from 'react';
import {TableCell, TableHead, TableRow} from "@mui/material";

type Props = {
    headers: string[]
}

const TableHeader: React.FC<Props> = ({headers}) => {
    return (
        <TableHead>
            <TableRow>
                {headers.map(h =>(
                    <TableCell key={h}>{h}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;