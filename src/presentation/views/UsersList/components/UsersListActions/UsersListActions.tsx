import React from 'react';
import {Button} from "@mui/material";
import {Add} from "@mui/icons-material";
import usersListTexts from "../../usersListTexts";

type Props = {
    disableActions: boolean
    onAddUser: () => void
}

const UsersListActions: React.FC<Props> = ({disableActions, onAddUser}) => {
    return (
        <>
            <Button
                startIcon={<Add/>}
                variant="contained"
                disabled={disableActions}
                onClick={!disableActions ? () =>onAddUser() : undefined}
            >
                {usersListTexts.addNewUserButton}
            </Button>
        </>
    );
};

export default UsersListActions;