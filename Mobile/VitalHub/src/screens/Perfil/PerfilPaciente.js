import { ScrollView } from "react-native"
import { Container } from "../../Components/Container/stylesContainer"
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle"
import { Descricao } from "../../Components/Texts/StylesText"
import { Logo } from "../../Components/Logo/StylesLogo"
import { BoxInput } from "../../Components/BoxInput/IndexBoxInput"
import { Botao } from "../../Components/Button/StylesButton"

export const Perfil = () => {
    return (
        <ScrollView>
            <Container>
                <Logo source={"https://media.licdn.com/dms/image/C4D03AQEvLoHUPD02kw/profile-displayphoto-shrink_800_800/0/1656377214430?e=1712793600&v=beta&t=4hRomuD886B0i49go4hSVH2dZEsZWhwu2iiRQJA6xP0"} />
                <Title>`Carlos Roque</Title>
                <Descricao>Carlos.Roque@gmail.com</Descricao>

                <BoxInput>
                    textLabel={'Data de nascimento'}
                    placeholder={'29/09/2006'}
                    keyType="numeric"
                    maxLength={8}
                    editable={true}
                </BoxInput>

                <BoxInput>
                    textLabel={'CPF'}
                    placeholder={'532****'}
                    keyType="numeric"
                    maxLength={11}
                    editable={true}
                </BoxInput>

                <BoxInput>
                    textLabel={'Endereço'}
                    placeholder={'Rua Hemisferio'}
                    maxLength={30}
                    editable={true}
                </BoxInput>

                <BoxInput>
                    textLabel={'Cep'}
                    placeholder={'03375-000'}
                    maxLength={9}
                    editable={true}
                    fieldWi dth={40}
                </BoxInput>

                <BoxInput>
                    textLabel={'Cidade'}
                    placeholder={'Moema-SP'}
                    maxLength={9}
                    editable={true}
                    fieldWidth={40}
                </BoxInput>

                <Botao>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Botao>

                <Botao>
                    <ButtonTitle>Editar</ButtonTitle>
                </Botao>

            </Container>
        </ScrollView>
    )
}