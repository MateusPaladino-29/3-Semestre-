import { HighInput, LargeInput, ProfileInput } from "../Input/Input"
import { Label, LabelModal } from "../Label/Label"
import { BoxInput } from "./StyleInputBox"


export const InputBox = ({
    fieldWidth = 100,
    fieldHeight = 90,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <Label textLabel={textLabel}/>

            <ProfileInput
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </BoxInput>

    )
}

export const HighInputBox = ({
    fieldWidth = 100,
    fieldHeight = 90,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <Label textLabel={textLabel}/>

            <HighInput
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </BoxInput>

    )
}

export const LargeInputTextBox = ({
    fieldWidth = 100,
    fieldHeight = 90,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <Label textLabel={textLabel}/>

            <LargeInput
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </BoxInput>

    )
}
export const LargeInputBoxModal = ({
    fieldWidth = 390,
    fieldHeight = 53,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType = "default",
    maxLength,
    placeholderTextColor
}) => {
    return (

        <BoxInput fieldWidth={fieldWidth} fieldHeight={fieldHeight} textLabel={textLabel}>

            <LabelModal textLabel={textLabel}/>

            <LargeInput
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType} 
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
            />

        </BoxInput>

    )
}