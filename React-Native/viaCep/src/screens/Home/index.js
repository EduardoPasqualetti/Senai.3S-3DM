import { Text } from "react-native";
import { ScrollForm,ContainerForm, ViewUF, } from "./style";
import { BoxInput } from "../../components/BoxInput";

export function Home(){

    //hooks - states

    //hooks - effect
        //chamada da api


    return(

        //ScrollForm
        //ContainerForm
        //BoxInput
            //Label
            //Input
        <ScrollForm>
            <ContainerForm>
                <BoxInput 
                    textLabel= "Informar CEP:"
                    placeholder= "CEP"
                    maxLenght={9}
                    editable={true}
                />
                <BoxInput 
                    textLabel= "Logradouro"
                    placeholder= "Logradouro..."
                />
                <BoxInput 
                    textLabel= "Bairro"
                    placeholder= "Bairro..."
                />
                <BoxInput 
                    textLabel= "Cidade"
                    placeholder= "Cidade..."
                />
                <ViewUF>
                <BoxInput 
                    textLabel= "Estado"
                    placeholder= "Estado..."
                    fieldWidth= "67"
                />
                <BoxInput 
                    textLabel= "UF"
                    placeholder= "UF..."
                    fieldWidth= "25"
                />
                </ViewUF>
            </ContainerForm>
        </ScrollForm>
        
    )
}