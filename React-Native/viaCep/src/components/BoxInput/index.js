//Definir Props

import { Input } from "../Input"
import { Label } from "../Label"

import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue,
    onChangeText,
    keyType = 'default',
    maxLength 
}) => {
    
    return(
        <FieldContent fieldWidth={fieldWidth}>
            <Label textLabel={textLabel}/>
            
            <Input 
            placeholder={placeholder}
            editable={editable}
            keyType={keyType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            />
        </FieldContent>
    )
}