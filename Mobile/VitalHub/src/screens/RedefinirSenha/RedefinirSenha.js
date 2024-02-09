import { Botao } from "../../Components/Button/StylesButton"
import { Container } from "../../Components/Container/stylesContainer"
import { Input } from "../../Components/Input/IndexInput"
import { InputRedefinir } from "../../Components/Input/StylesInput"
import { Close, Logo } from "../../Components/Logo/StylesLogo"
import { Descricao } from "../../Components/Texts/StylesText"
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle"

export const RedefinirSenha = () => {
    return(
        <Container>
            <Close source={require("../../assets/Close.png")}/>
            <Logo source={require("../../assets/VitalHub_Logo1.png")} />
            <Title>Redefinir senha</Title>
            <Descricao>Insira e confirme a sua nova senha</Descricao>
            <Input placeholder={"Nova Senha"} placeholderTextColor={"#34898F"}/>
            <InputRedefinir placeholder={"Confirmar nova senha"} placeholderTextColor={"#34898F"}/>
           
            <Botao>
                <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
            </Botao>

           
        </Container>
    )
}