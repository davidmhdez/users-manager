import React, {useState} from 'react';
import {Avatar, Button, FormHelperText, Grid, InputLabel} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import './avatarInputStyles.scss';

type Props = {
    label?: string
    error?: string
    defaultImageUrl?: string
    onChangeAvatar: (file: File, name: string) => void
} & React.InputHTMLAttributes<HTMLInputElement>

const AvatarInput: React.FC<Props> = ({defaultImageUrl, onChangeAvatar, error, label, ...rest}) => {
    const [imageUrl, setImageUrl] = useState(defaultImageUrl ? defaultImageUrl : '');

    const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, files } = e.target;
        const file = files ? files[0] : null;
        if(file){
            setImageUrl(URL.createObjectURL(file));
            onChangeAvatar(file, name);
        }
    }

    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <InputLabel>{label}</InputLabel>
            <div className="avatar-container">
                <Avatar
                    className="avatar"
                    src={imageUrl}
                />
                <Button className="file-button" variant="contained" size="small" component="label">
                    <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={handleChangeAvatar}
                        {...rest}
                    />
                    <PhotoCamera/>
                </Button>
            </div>
            {error && <FormHelperText error>{error}</FormHelperText>}
        </Grid>
    );
};

export default AvatarInput;