import { Botao } from "../../Components/Button/StylesButton";
import { BoxNumeric, Container } from "../../Components/Container/stylesContainer";
import { InputNumeric } from "../../Components/Input/StylesInput";
import { LinkCodigo } from "../../Components/Link/IndexLink";
import { Close, Logo } from "../../Components/Logo/StylesLogo";
import { Descricao, DescricaoEmail } from "../../Components/Texts/StylesText";
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle";

export const verificacao = () => {
    return (
        <Container>
        <Close source={require("../../assets/Close.png")}/>

        <Logo source={require("../../assets/VitalHub_Logo1.png")}/>
        
        <Title>Verifique seu e-mail</Title>

        <Descricao>Digite o código de 4 dígitos enviado para <DescricaoEmail>username@email.com</DescricaoEmail></Descricao>

        <BoxNumeric>
            <InputNumeric placeholder={"0"}  placeholderTextColor={"#34898F"}/>
            <InputNumeric placeholder={"0"}  placeholderTextColor={"#34898F"}/>
            <InputNumeric placeholder={"0"}  placeholderTextColor={"#34898F"}/>
            <InputNumeric placeholder={"0"}  placeholderTextColor={"#34898F"}/>
        </BoxNumeric>

        <Botao>
            <ButtonTitle>Entrar</ButtonTitle>
        </Botao>

        <LinkCodigo/>

        </Container>

    )
}