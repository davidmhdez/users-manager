import {SelectOption} from "../../components/FormControls/FormSelect/FormSelect";
import {Gender, UserStatus} from "../../../domain/entity/User/structure/User";
import {optionsTexts} from "./optionsTexts";

export const getOptionLabel = (value: string, options: SelectOption[]) =>{
    const option = options.find(opt => opt.value === value);
    return option ? option.label : ''
}

export const genderOptions: SelectOption[] = [
    {value: Gender.Male, label: optionsTexts.maleLabel},
    {value: Gender.Female, label: optionsTexts.femaleLabel},
    {value: Gender.Other, label: optionsTexts.otherLabel}
]

export const userStatusOptions: SelectOption[] = [
    {value: UserStatus.Active, label: optionsTexts.activeLabel},
    {value: UserStatus.Inactive, label: optionsTexts.inactiveLabel}
]