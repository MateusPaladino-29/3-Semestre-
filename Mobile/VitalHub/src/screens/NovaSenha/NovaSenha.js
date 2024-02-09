import { Botao } from "../../Components/Button/StylesButton"
import { Container } from "../../Components/Container/stylesContainer"
import { InputCreate } from "../../Components/Input/IndexInput"
import { Cancelar } from "../../Components/Link/IndexLink"
import { Logo } from "../../Components/Logo/StylesLogo"
import { Descricao } from "../../Components/Texts/StylesText"
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle"

export const NovaSenha = () => {
    return(
        <Container>
           
            <Logo source={require("../../assets/VitalHub_Logo1.png")} />
            <Title> Criar Conta</Title>
            <Descricao>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Descricao>
            <InputCreate placeholder={"Usuário ou E-mail"} placeholderTextColor={"#34898F"}/>
            <InputCreate placeholder={"Senha"} placeholderTextColor={"#34898F"}/>
            <InputCreate placeholder={"Confirmar Senha"} placeholderTextColor={"#34898F"}/>

            <Botao>
                <ButtonTitle>Continuar</ButtonTitle>
            </Botao>

            <Cancelar/>
        </Container>
    )
}