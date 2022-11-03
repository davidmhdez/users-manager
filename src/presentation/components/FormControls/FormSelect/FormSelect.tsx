import React from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps} from "@mui/material";

export type SelectOption = {
    value: string
    label: string
}

type Props = {
    options: SelectOption[]
    helperText?: string
    emptyValueText?: string
} & SelectProps

const FormSelect: React.FC<Props> = ({id, label, options, error, required, emptyValueText, helperText, ...rest}) => {
    const labelId = 'label' + id;
    const lb = label && required ? label + " *" : label;
    return (
        <FormControl fullWidth size="small" error={error}>
            <InputLabel id={labelId} >{lb}</InputLabel>
            <Select
                labelId={labelId}
                id={id}
                label={lb}
                error={error}
                {...rest}
            >
                {options.map(opt =>(
                    <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                ))}
                {emptyValueText && <MenuItem value=''>{emptyValueText}</MenuItem>}
            </Select>
            {helperText
                &&
                <FormHelperText>{helperText}</FormHelperText>
            }

        </FormControl>
    );
};

export default FormSelect;