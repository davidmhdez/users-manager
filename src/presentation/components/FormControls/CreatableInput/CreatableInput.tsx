import React from 'react';
import {Autocomplete, TextField, createFilterOptions } from "@mui/material";

type Props = {
    label: string
    value: any[]
    name: string
    createValueText: string
    isValidValue?: (value: string) => boolean
    placeholder?: string
    onChange: (value: string[], name: string) => void
    disabled?: boolean
}

const filter = createFilterOptions<any>();

const CreatableInput: React.FC<Props> = ({label, value, name, createValueText, isValidValue, onChange, placeholder, disabled}) => {
    return (
        <Autocomplete
            multiple
            options={[]}
            value={value}
            noOptionsText=""
            size="small"
            disabled={disabled}
            readOnly={disabled}
            renderInput={params =>(
                <TextField
                    {...params}
                    variant="outlined"
                    label={label}
                    size="small"
                    disabled={disabled}
                    placeholder={placeholder}
                />
            )}
            onChange={(event, newValue, reason, details) => {
                if (typeof newValue === 'string') {
                    onChange([newValue], name)
                } else if (Array.isArray(newValue)) {
                    onChange(newValue.map(v => typeof(v) === 'string' ? v : v.inputValue ), name)
                } else {
                    onChange(newValue, name);
                }
            }}
            getOptionLabel={(option) => {
                if (typeof option === 'string') return option;
                if (option.inputValue) return option.inputValue;
                return option.label;
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;

                // Suggest the creation of a new value
                const isExisting = options.includes(inputValue) || value.includes(inputValue);
                const isValidOption = isValidValue ? isValidValue(inputValue) : true;
                if (inputValue !== '' && !isExisting && isValidOption) {
                    filtered.push({
                        inputValue,
                        label: `${createValueText} "${inputValue}"`,
                    });
                }
                return filtered;
            }}
            renderOption={(props, option) => <li {...props}>{option.label}</li>}
        />
    );
};

export default CreatableInput;