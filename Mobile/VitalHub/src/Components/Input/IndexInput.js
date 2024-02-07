import { InputBox } from "./StylesInput"

export const Input = ({
    placeholder,
    keyType,
    fieldValue,
    onChangeText,
    placeholderTextColor,
    secureTextEntry = false 
  
    
}) => {
    return(
        
        <InputBox
            placeholder={placeholder}         
            keyboardType={keyType}
            value={fieldValue}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            
        />
        
    )
}