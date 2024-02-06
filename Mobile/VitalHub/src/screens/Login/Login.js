import { Button, Text } from "react-native"
import { Container } from "../../Components/Container/stylesContainer"
import { Logo } from "../../Components/Logo/StylesLogo"
import { Title } from "../../Components/Title/StylesTitle"
import { Input } from "../../Components/Input/IndexInput"
// import { LinkMedium } from "../../Components/Link/StylesLink"


export const Login = () => {
    return(
    <Container>
        <Logo source={require("../../assets/VitalHub_Logo1.png")}/>

         <Title>Entrar ou Criar conta</Title>

         <Input placeholder={"Usuário ou E-mail"} placeholderTextColor={"#34898F"}/>

         <Input placeholder={"Senha"}  placeholderTextColor={"#34898F"}/>

          {/* <LinkMedium>Esqueceu sua senha?</LinkMedium>  */}

        {/* <Button>
            <ButtonTitle>Entrar</ButtonTitle>
        </Button>

        <ButtonGoogle>
            <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
        </ButtonGoogle>

        <ContentAccount>
            <TextAccount>Nao tem conta? crie uma conta agora</TextAccount>
        </ContentAccount>   */}
  

    </Container>
    )
}