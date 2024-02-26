import { InputLabel, InputLabelModal } from "./StyleLabel"

export const Label = ({ textLabel }) => {

    return (
        <InputLabel>
            {textLabel}
        </InputLabel>
    )
}
export const LabelModal = ({ textLabel }) => {

    return (
        <InputLabelModal>
            {textLabel}
        </InputLabelModal>
    )
}