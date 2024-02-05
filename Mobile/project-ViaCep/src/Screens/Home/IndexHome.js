
import { useEffect, useState } from "react";
import { BoxInput, } from "../../components/BoxInput/IndexBoxInput";
import { ContainerForm, Flex, ScrollForm, } from "./StylesHome";
import api from "../../service/services";
import axios from "axios";

export function Home() {

    //states -- variaveis
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade , setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')
    



    // useeffect -- funções
    useEffect(() => {

        const Get = async () => {

            if (cep !== "" && cep.length === 8) {

                try {

                    const dados = (await api.get(`${cep}/json/`))

                    if (dados.data) {

                        setLogradouro  (dados.data.logradouro);
                        setBairro  (dados.data.bairro);
                        setCidade (dados.data.localidade);
                        setUf  (dados.data.uf);
                      
                        

                        const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${dados.data.uf}`)

                        setEstado(estado.data.nome)
                        // console.log(logradouro);377
                    

                    } else {

                        alert("Este CEP näo exite, verifique-o")

                    }

                } catch (error) {
                    console.log("Ocorreu um erro ao buscar o CEP", error);

                    
                }
            }

        }

        Get()

    }, [cep]);



    return (

        <ScrollForm>
            <ContainerForm>

                <BoxInput
                    textLabel='Informar Cep'
                    placeholder='CEP ....'
                    keyType='numeric'
                    maxLegth={9}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={e => setCep(e)}
                    
                />

                <BoxInput
                    textLabel='Lougradouro'
                    placeholder={logradouro}
                    keyType='text'
                    fieldValue={logradouro}

                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder={bairro}
                    keyType='text'
                    fieldValue={bairro}
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder={cidade}
                    keyType='text'
                    fieldValue={cidade}
                />

                <Flex>

                    <BoxInput
                        textLabel='Estado'
                        placeholder={estado}
                        keyType='text'
                        fieldWidth={60}
                        fieldValue={estado}

                    />
                    <BoxInput
                        textLabel='UF'
                        placeholder={uf}
                        keyType='text'
                        fieldWidth={28}
                        fieldValue={uf}
                    />

                </Flex>


            </ContainerForm>
        </ScrollForm>

    )

}

