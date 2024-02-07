import { Text } from "react-native"
import { Container } from "../../Components/Container/stylesContainer"
import { Logo, LogoGoogle } from "../../Components/Logo/StylesLogo"
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../Components/Title/StylesTitle"
import { Input } from "../../Components/Input/IndexInput"
import { ContentAccount, LinkMedium } from "../../Components/Link/IndexLink"
import { Botao, ButtonGoogle } from "../../Components/Button/StylesButton"
import { AntDesign } from '@expo/vector-icons';


export const Login = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo1.png")} />

            <Title>Entrar ou Criar conta</Title>

            <Input placeholder={"Usuário ou E-mail"} placeholderTextColor={"#34898F"} />

            <Input placeholder={"Senha"} placeholderTextColor={"#34898F"} secureTextEntry={true} />

            <LinkMedium url={'https://i0.wp.com/www.brasilferroviario.com.br/wp-content/uploads/2020/11/MANUTENCAO.jpg?fit=878%2C536&ssl=1'} />

            <Botao>
                <ButtonTitle>Entrar</ButtonTitle>
            </Botao>

            <ButtonGoogle >
            <AntDesign name="google" size={24} color="#496BBA"/>
                <ButtonTitleGoogle >Entrar com o Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount url={'https://i0.wp.com/www.brasilferroviario.com.br/wp-content/uploads/2020/11/MANUTENCAO.jpg?fit=878%2C536&ssl=1'} />




        </Container>
    )
}