import React, {useState} from 'react';
import UsersList from "./UsersList";
import User, {defaultUser} from "../../../domain/entity/User/structure/User";
import usePagination from "../../utils/hooks/usePagination";
import container from "../../../inversify.config";
import GetUsersUseCase from "../../../domain/interactor/User/GetUsersUseCase";
import TYPES from "../../../domain/repository/Types";
import CreateUserUseCase from "../../../domain/interactor/User/CreateUserUseCase";
import DeleteUserUseCase from "../../../domain/interactor/User/DeleteUserUseCase";
import UpdateUserUseCase from "../../../domain/interactor/User/UpdateUserUseCase";

const UsersListContainer = () => {

    // use cases
    const getUsersUC = container.get<GetUsersUseCase>(TYPES.GetUsersUseCase);
    const createUserUC = container.get<CreateUserUseCase>(TYPES.CreateUserUseCase);
    const deleteUserUC = container.get<DeleteUserUseCase>(TYPES.DeleteUserUseCase);
    const updateUserUC = container.get<UpdateUserUseCase>(TYPES.UpdateUserUseCase);

    // get users
    const handleGetUsers: (page: number, perPage: number) => Promise<User[]> = (page, perPage) =>{
        return getUsersUC.getUsers(page, perPage);
    }
    const pagination = usePagination({perPage: 10, onSearch: handleGetUsers})

    // user modal controls and save actions
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const handleOpenUserModal = (user?: User) => user ? setSelectedUser(user) : setSelectedUser(defaultUser);
    const handleCloseUserModal = () => setSelectedUser(null);
    const handleSaveUser = async (user: User) =>{
        user.id
            ? await updateUserUC.updateUser(user)
            : await createUserUC.createUser(user)
        setSelectedUser(null)
    }

    // delete user actions
    const [selectedDeleteUserId, setSelectedDeleteUserId] = useState<number | null>(null);
    const handleOpenDeleteUserModal = (userId: number | null) => setSelectedDeleteUserId(userId);
    const handleCloseDeleteUserModal = () => setSelectedDeleteUserId(null);
    const handleDeleteUser: (userId: number) => Promise<void> = async (userId) =>{
        await deleteUserUC.deleteUser(userId);
        setSelectedDeleteUserId(null);
        pagination.refresh('deleteItem')
    }

    return (
        <UsersList
            pagination={pagination}
            onOpenUserModal={handleOpenUserModal}
            onSaveUser={handleSaveUser}
            selectedUser={selectedUser}
            onCloseUserModal={handleCloseUserModal}
            selectedDeleteUserId={selectedDeleteUserId}
            onCloseDeleteUserModal={handleCloseDeleteUserModal}
            onDeleteUser={handleDeleteUser}
            onOpenDeleteUserModal={handleOpenDeleteUserModal}
        />
    );
};

export default UsersListContainer;