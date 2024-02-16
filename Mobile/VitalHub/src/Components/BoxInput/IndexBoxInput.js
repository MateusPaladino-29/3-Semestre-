
import { InputProfile} from "../Input/IndexInput"
import { InpuTextDiagnostico, InputTextProntuario } from "../Input/StylesInput"
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
    placeholderTextColor,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <InputTextProntuario
            editable={editable}
            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            maxLength={maxLength}
            placeholderTextColor={placeholderTextColor}

            />  
        </FieldContent>
    )
}

export const BoxInputDiagnostico = ({
    fieldWidth =100,
    editable = false,
    textLabel,
    placeholder,
    placeholderTextColor,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength,
}) => {
    return (

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <InpuTextDiagnostico
            editable={editable}
            placeholder={placeholder}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            keyType={keyType}
            placeholderTextColor={ placeholderTextColor}
            maxLength={maxLength}

            />  
        </FieldContent>
    )
}