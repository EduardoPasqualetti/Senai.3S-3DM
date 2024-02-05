import { ScrollForm,ContainerForm, ViewUF, } from "./style";
import { BoxInput } from "../../components/BoxInput";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, TouchableOpacity, Text } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export function Home(){

    //hooks - states
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState({})


        //chamada da api
    const getCep = async () => {
        try {
            if (cep.length === 8 && cep != "") {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)
            }
            
        } catch (error) {
            console.warn('Erro ao buscar cep')
        }
    }

    function clearCep(){
        setEndereco({})
    }


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
                    maxLength={8}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={t => setCep(t)}
                    keyType="numeric"
                    onBlur={cep ? getCep : clearCep}
                />
            
                <BoxInput 
                    textLabel= "Logradouro"
                    placeholder= "Logradouro..."
                    fieldValue={endereco.logradouro}
                />
                <BoxInput 
                    textLabel= "Bairro"
                    placeholder= "Bairro..."
                    fieldValue={endereco.bairro}
                />
                <BoxInput 
                    textLabel= "Cidade"
                    placeholder= "Cidade..."
                    fieldValue={endereco.localidade}
                />
                <ViewUF>
                <BoxInput 
                    textLabel= "DDD"
                    placeholder= "DDD..."
                    fieldWidth= "67"
                    fieldValue={endereco.ddd}
                />
                <BoxInput 
                    textLabel= "UF"
                    placeholder= "UF..."
                    fieldWidth= "25"
                    fieldValue={endereco.uf}
                />
                </ViewUF>
            </ContainerForm>
        </ScrollForm>
        
    )
}