
import { InputProfile, InputProntuario } from "../Input/IndexInput"
import { Label } from "../Label/IndexLabel"
import { FieldContent } from "./StylesBoxInput"

export const BoxInput = ({
    fieldWidth =100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <InputProfile
            editable={editable}
            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}

            />  
        </FieldContent>
    )
}


export const BoxDescricao  = ({
    fieldWidth =100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <InputProntuario
            editable={editable}
            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}

            />  
        </FieldContent>
    )
}