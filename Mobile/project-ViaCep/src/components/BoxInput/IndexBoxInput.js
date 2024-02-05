import { Input } from "../Input/IndexInput";
import { Label } from "../Label/IndexLabel";
import { FieldContent } from "./StylesBoxInput";

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLegth

}) => {
    return(
        
        <FieldContent fieldWidth={fieldWidth}>

        <Label textLabel={textLabel}/>  
        
        <Input 
        placeholder={placeholder}
        editable={editable}
        keyType={keyType}
        maxLength={maxLegth}
        value={fieldValue}
        onChangeText={onChangeText}
        
        />

        </FieldContent>
    );
};

