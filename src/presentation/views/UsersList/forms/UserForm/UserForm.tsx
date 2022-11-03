import React from 'react';
import {Grid, SelectChangeEvent, TextField} from "@mui/material";
import usersListTexts from "../../usersListTexts";
import FormSelect from "../../../../components/FormControls/FormSelect";
import {genderOptions, userStatusOptions} from "../../../../utils/options/options";
import CreatableInput from "../../../../components/FormControls/CreatableInput";
import {isValidEmail} from "../../../../utils/regExp";
import AvatarInput from "../../../../components/FormControls/AvatarInput";
import User from "../../../../../domain/entity/User/structure/User";
import {useFormik} from "formik";
import {newUserValidationSchema, updateUserValidationSchema} from "./userValidationSchema";
import {preventEnterPress} from "../../../../utils/helpers";

type Props = {
    user: User
    formId: string
    isLoadingForm: boolean
    onSaveUser: (user: User) => void
}

const UserForm: React.FC<Props> = ({user, formId, isLoadingForm, onSaveUser}) => {
    const { values, errors, handleChange, handleSubmit, setFieldValue, setFieldError } = useFormik({
        initialValues: user,
        onSubmit: onSaveUser,
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: user.id === null ? newUserValidationSchema : updateUserValidationSchema
    });

    const _handleChange = (e: React.ChangeEvent<any>) => {
        handleChange(e);
        setFieldError(e.target.name, '')
    }

    const _handleChangeSelect = (e: SelectChangeEvent<any>) => {
        handleChange(e);
        setFieldError(e.target.name, '')
    }

    const handleChangeAvatar = (file: File, name: string) =>{
        setFieldValue(name, file);
        setFieldError(name, '');
    }

    return (
        <form id={formId} onKeyDown={preventEnterPress} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AvatarInput
                        id="image"
                        name="image"
                        label="Imagen"
                        error={errors.image}
                        disabled={isLoadingForm}
                        defaultImageUrl={user.imageUrl}
                        onChangeAvatar={handleChangeAvatar}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        variant="outlined"
                        label={usersListTexts.nameLabel + " *"}
                        disabled={isLoadingForm}
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name}
                        onChange={_handleChange}
                        value={values.name}
                        size="small"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormSelect
                        id="gender"
                        required
                        name="gender"
                        disabled={isLoadingForm}
                        value={values.gender}
                        error={!!errors.gender}
                        helperText={errors.gender}
                        onChange={_handleChangeSelect}
                        label={usersListTexts.genderLabel}
                        options={genderOptions}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormSelect
                        required
                        id="status"
                        value={values.status}
                        error={!!errors.status}
                        helperText={errors.status}
                        onChange={_handleChangeSelect}
                        disabled={isLoadingForm}
                        name="status"
                        label={usersListTexts.statusLabel}
                        options={userStatusOptions}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CreatableInput
                        label={usersListTexts.emailLabel}
                        value={values.emails}
                        disabled={isLoadingForm}
                        name="emails"
                        onChange={(value, name)=> setFieldValue(name, value)}
                        isValidValue={isValidEmail}
                        createValueText={usersListTexts.addLabel}
                        placeholder={usersListTexts.addEmailsPlaceHolder}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default UserForm;