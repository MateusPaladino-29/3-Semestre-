import { CreateInput, InputBox, InputNumeric, InputTextProfile, RedefinirInput } from "./StylesInput"

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

export const BoxNumeric = ({
    placeholder,
    keyType,
    fieldValue,
    onChangeText,
    placeholderTextColor,
   
    
}) => {
    return(
        
        < InputNumeric

            placeholder={placeholder}         
            keyboardType={keyType}
            value={fieldValue}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            
        />

        
    )
}

export const InputRedefinir = ({
    placeholder,
    keyType,
    fieldValue,
    onChangeText,
    placeholderTextColor,
  
    
}) => {
    return(
        
        <RedefinirInput
            placeholder={placeholder}         
            keyboardType={keyType}
            value={fieldValue}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            
            
        />

        
    )
}

export const InputCreate = ({
    placeholder,
    keyType,
    fieldValue,
    onChangeText,
    placeholderTextColor,
  
    
}) => {
    return(
        
        <CreateInput
            placeholder={placeholder}         
            keyboardType={keyType}
            value={fieldValue}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            
            
        />

        
    )
}

export const InputProfile = ({
    editable, 
    placeholder, 
    fieldValue, 
    onChangeText, 
    keyType,
    maxLength,
    placeholderTextColor,
    // secureTextEntry = false,
}) => {
    return (
        <InputTextProfile
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            value={fieldValue}
            maxLength={maxLength}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            // secureTextEntry={secureTextEntry}
        />
    )
}
export const InputProntuario = ({
    editable, 
    placeholder, 
    fieldValue, 
    onChangeText, 
    keyType,
    maxLength,
    placeholderTextColor,
    // secureTextEntry = false,
}) => {
    return (
        <InputTextProntuario
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyType}
            value={fieldValue}
            maxLength={maxLength}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderTextColor}
            // secureTextEntry={secureTextEntry}
        />
    )
}
