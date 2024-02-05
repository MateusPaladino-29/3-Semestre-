import { BoxInput } from "./StylesInput"

export const Input = ({
    placeholder,
    keyType,
    editable,
    fieldValue,
    onChangeText,
    maxLength,
    
}) => {
    return(
        
        <BoxInput
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
            
        />
        
    )
}