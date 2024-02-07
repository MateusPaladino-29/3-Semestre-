import { Botao } from "../../Components/Button/StylesButton"
import { Container } from "../../Components/Container/stylesContainer"
import { Input } from "../../Components/Input/IndexInput"
import { Logo, Seta } from "../../Components/Logo/StylesLogo"
import { Descricao } from "../../Components/Text/StylesText"
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle"


export const Senha = () => {
    return(
        <Container>
            <Seta source={require("../../assets/Seta.png")}/>
            <Logo source={require("../../assets/VitalHub_Logo1.png")} />
            <Title>Recuperar Senha</Title>
            <Descricao>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Descricao>
            <Input placeholder={"Usuário ou E-mail"} placeholderTextColor={"#34898F"}/>

            <Botao>
                <ButtonTitle>Continuar</ButtonTitle>
            </Botao>
        </Container>
    )
}