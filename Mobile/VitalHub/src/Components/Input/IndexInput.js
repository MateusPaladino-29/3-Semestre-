import { InputBox } from "./StylesInput"

export const Input = ({
    placeholder,
    keyType,
    fieldValue,
    onChangeText,
    placeholderTextColor
  
    
}) => {
    return(
        
        <InputBox
            placeholder={placeholder}         
            keyboardType={keyType}
            value={fieldValue}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            
        />
        
    )
}