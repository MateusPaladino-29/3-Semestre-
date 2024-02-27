import { InputLabel, InputLabelModal, InputLabelPrescription } from "./StyleLabel"

export const Label = ({ textLabel }) => {

    return (
        <InputLabel>
            {textLabel}
        </InputLabel>
    )
}
export const LabelPrescription = ({ textLabel }) => {

    return (
        <InputLabelPrescription>
            {textLabel}
        </InputLabelPrescription>
    )
}
export const LabelModal = ({ textLabel }) => {

    return (
        <InputLabelModal>
            {textLabel}
        </InputLabelModal>
    )
}