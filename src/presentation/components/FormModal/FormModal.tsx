import React, {ReactNode} from 'react';
import Modal from '@mui/material/Modal';
import {Button, Card, CardActions, CardContent, CircularProgress, Typography} from "@mui/material";

type Props = {
    title: string
    isOpen: boolean
    isLoadingForm: boolean
    children: ReactNode
    formId?: string
    buttonsActions: {
        confirmText: string
        confirmTheme?: 'primary' | 'error'
        closeText: string
        onConfirm?: () => void
        onCloseModal: () => void
    }
}

const FormModal: React.FC<Props> = ({title, isOpen, isLoadingForm, children, formId, buttonsActions}) => {
    return (
        <Modal
            open={isOpen}
            aria-labelledby={title}
            sx={{
                maxWidth: "750px",
                margin: '16px auto 0 auto',
                maxHeight: "80vh"
            }}
        >
            <Card>
                <CardContent>
                    <Typography
                        mt={0}
                        mb={2}
                        variant="h5"
                        component="div"
                    >
                        {title}
                    </Typography>
                    {children}
                </CardContent>
                <CardActions sx={{justifyContent: "flex-end"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={!isLoadingForm ? buttonsActions.onConfirm : undefined}
                        startIcon={isLoadingForm ? <CircularProgress size={16} color="inherit"/> : undefined}
                        disabled={isLoadingForm}
                        color={buttonsActions.confirmTheme}
                        form={formId}
                    >
                        {buttonsActions.confirmText}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={!isLoadingForm ? buttonsActions.onCloseModal : undefined}
                        disabled={isLoadingForm}
                    >
                        {buttonsActions.closeText}
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default FormModal;