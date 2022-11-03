import React, {useState} from 'react';
import User from "../../../../../domain/entity/User/structure/User";
import FormModal from "../../../../components/FormModal";
import usersListTexts from "../../usersListTexts";
import UserForm from "../../forms/UserForm";
import {toast} from "react-toastify";

type Props = {
    user: User
    title: string
    formId: string
    onSaveUser: (user: User) => Promise<void>
    onCancel: () => void
}

const UserModal: React.FC<Props> = ({user, title, formId, onSaveUser, onCancel}) => {

    const [isSavingUser, setIsSavingUser] = useState(false);
    const handleSaveUser = async (user: User) =>{
        setIsSavingUser(true)
        try {
            await onSaveUser(user);
            toast.success(usersListTexts.saveUserSuccess)
        }catch (error: any) {
            toast.error(usersListTexts.saveUserError)
        }
        setIsSavingUser(false)
    }

    return (
        <FormModal
            title={title}
            isOpen
            isLoadingForm={isSavingUser}
            formId={formId}
            buttonsActions={{
                confirmText: usersListTexts.saveFormButton,
                closeText: usersListTexts.cancelFormButton,
                onCloseModal: onCancel
            }}
        >
            <UserForm
                user={user}
                formId={formId}
                isLoadingForm={isSavingUser}
                onSaveUser={handleSaveUser}
            />
        </FormModal>
    );
};

export default UserModal;