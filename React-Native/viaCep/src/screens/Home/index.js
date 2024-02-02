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

    //hooks - effect
    useEffect(() => {
        if (cep) {
          getCep();
        }
        else {
            clearCep();
        }
      }, [cep]);


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
                    onChangeText={setCep}
                    keyType="numeric"
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
                    textLabel= "Estado"
                    placeholder= "Estado..."
                    fieldWidth= "67"
                    fieldValue={endereco.uf}
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