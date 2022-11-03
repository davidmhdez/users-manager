import React, {useState} from 'react';
import FormModal from "../../../../components/FormModal";
import {Typography} from "@mui/material";
import {toast} from "react-toastify";
import usersListTexts from "../../usersListTexts";

type Props = {
    selectedDeleteUserId: number | null
    onDeleteUser: (userId: number) => Promise<void>
    onCloseDeleteModal: () => void
}

const DeleteUserModal: React.FC<Props> = ({selectedDeleteUserId, onDeleteUser, onCloseDeleteModal}) => {
    if(!selectedDeleteUserId) return null;

    const [isDeletingUser, setIsDeletingUser] = useState(false);
    const handleDeleteUser = async () =>{
        setIsDeletingUser(true);
        try {
            await onDeleteUser(selectedDeleteUserId);
            toast.success(usersListTexts.deleteUserSuccess)
        }catch (error: any) {
            toast.error(usersListTexts.deleteUserError)
        }
        setIsDeletingUser(false);
    }

    return (
        <FormModal
            title={usersListTexts.deleteModalTitle}
            isOpen
            isLoadingForm={isDeletingUser}
            buttonsActions={{
                onCloseModal: onCloseDeleteModal,
                closeText: usersListTexts.cancelFormButton,
                confirmText: usersListTexts.deleteFormButton,
                onConfirm: handleDeleteUser,
                confirmTheme: 'error'
            }}
        >
            <Typography>{usersListTexts.deleteModalWarning}</Typography>
        </FormModal>
    );
};

export default DeleteUserModal;