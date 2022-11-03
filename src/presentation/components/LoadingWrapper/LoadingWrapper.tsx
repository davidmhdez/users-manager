import React from 'react';
import './loadingWrapperStyles.scss';
import {CircularProgress} from "@mui/material";

type Props = {
    isLoading: boolean
}

const LoadingWrapper: React.FC<Props> = ({isLoading}) => {
    if(!isLoading) return null;

    return (
        <div className="loading-wrapper">
            <CircularProgress/>
        </div>
    );
};

export default LoadingWrapper;