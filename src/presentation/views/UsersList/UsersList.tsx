import React from 'react';
import {Box, Grid} from "@mui/material";
import UsersListActions from "./components/UsersListActions";
import User from "../../../domain/entity/User/structure/User";
import UserModal from "./components/UserModal";
import usersListTexts from "./usersListTexts";
import UsersTable from "./components/UsersTable";
import Pagination from "../../../domain/entity/Pagination/structure/Pagination";
import DeleteUserModal from "./components/DeleteUserModal";

type Props = {
    pagination: Pagination
    selectedUser: User | null
    selectedDeleteUserId: number | null
    onOpenUserModal: (user?: User) => void
    onCloseUserModal: () => void
    onSaveUser: (user: User) => Promise<void>
    onOpenDeleteUserModal: (userId: number | null) => void
    onCloseDeleteUserModal: () => void
    onDeleteUser: (userId: number) => Promise<void>
}

const UsersList: React.FC<Props> = ({ pagination, selectedUser, onOpenUserModal, onCloseUserModal, onSaveUser, selectedDeleteUserId, onDeleteUser, onCloseDeleteUserModal, onOpenDeleteUserModal}) => {
    return (
        <>
            <Box mt={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <UsersListActions
                            onAddUser={onOpenUserModal}
                            disableActions={pagination.isLoading}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <UsersTable
                            onOpenUser={onOpenUserModal}
                            onOpenDeleteModal={onOpenDeleteUserModal}
                            {...pagination}
                        />
                    </Grid>
                </Grid>
            </Box>
            {selectedUser
                &&
                <UserModal
                    user={selectedUser}
                    title={selectedUser.id ? usersListTexts.newUserFormTitle : usersListTexts.updateUserFormTitle}
                    formId={selectedUser.id ? "new-user" : "update-user"}
                    onSaveUser={onSaveUser}
                    onCancel={onCloseUserModal}
                />
            }
            <DeleteUserModal
                selectedDeleteUserId={selectedDeleteUserId}
                onDeleteUser={onDeleteUser}
                onCloseDeleteModal={onCloseDeleteUserModal}
            />
        </>
    );
};

export default UsersList;