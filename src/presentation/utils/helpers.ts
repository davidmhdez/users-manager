import React from "react";

export const preventEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
}