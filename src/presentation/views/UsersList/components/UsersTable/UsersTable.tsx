import React from 'react';
import DataTable from "../../../../components/DataTable";
import {Avatar, IconButton} from "@mui/material";
import {DeleteOutline, Search} from "@mui/icons-material";
import usersListTexts from "../../usersListTexts";
import User from "../../../../../domain/entity/User/structure/User";
import {genderOptions, getOptionLabel, userStatusOptions} from "../../../../utils/options/options";
import Pagination from "../../../../../domain/entity/Pagination/structure/Pagination";

type Props = {
    data: User[]
    onOpenUser: (user: User) => void
    onOpenDeleteModal: (userId: number | null) => void
} & Pagination

const UsersTable: React.FC<Props> = ({data: users, page, perPage, hasMore, isLoading, onChangePage, onOpenUser, onOpenDeleteModal}) => {
    const headers = [
        '',
        usersListTexts.idLabel,
        usersListTexts.nameLabel,
        usersListTexts.emailLabel,
        usersListTexts.genderLabel,
        usersListTexts.statusLabel,
        usersListTexts.tableActionsHeader
    ]

    const data = users.map(user =>{
        return{
            avatar: <Avatar alt={user.name} src={user.imageUrl} className="user-avatar"/>,
            id: user.id,
            name: user.name,
            email: 'test@test.com',
            gender: getOptionLabel(user.gender, genderOptions),
            status: getOptionLabel(user.status, userStatusOptions),
            actions:   <>
                <IconButton onClick={()=> onOpenDeleteModal(user.id)} color="error" aria-label="delete">
                    <DeleteOutline/>
                </IconButton>
                <IconButton onClick={() => onOpenUser(user)} color="primary" aria-label="get">
                    <Search/>
                </IconButton>

            </>
        }
    })

    return (
        <DataTable
            headers={headers}
            data={data}
            isLoading={isLoading}
            pagination={{
                page,
                rowsPerPage: perPage,
                onChangePage,
                hasMore
            }}
        />
    );
};

export default UsersTable;