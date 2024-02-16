import { ScrollView } from "react-native";
import { Container, ContainerInput, Flex } from "../../Components/Container/stylesContainer";
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle";
import { Descricao } from "../../Components/Texts/StylesText";
import { LogoPaciente } from "../../Components/Logo/StylesLogo";
import { BoxInput } from "../../Components/BoxInput/IndexBoxInput";
import { Botao, BotaoProfile } from "../../Components/Button/StylesButton";


export const Perfil = () => {
  return (
    <ScrollView>
      <Container>
        <LogoPaciente source={require("../../assets/Carlos.jpg")} />
        <Title>`Carlos Roque</Title>
        <Descricao>Carlos.Roque@gmail.com</Descricao>

        <BoxInput
          textLabel={"Data de nascimento"}
          placeholder={"29/09/2000"}
          keyType="numeric"
          maxLength={8}
          editable={true}
        />

        <BoxInput
          textLabel={"CPF"}
          placeholder={"0000000000"}
          keyType="numeric"
          maxLength={11}
          editable={true}
        />

        <BoxInput
          textLabel={"Endereço"}
          placeholder={"Rua Hemisferio"}
          maxLength={30}
          editable={true}
        />

        <ContainerInput>
          <BoxInput
            textLabel={"Cep"}
            placeholder={"0000-000"}
            maxLength={9}
            editable={true}
            fieldWidth={45}
          />

          <BoxInput
            textLabel={"Cidade"}
            placeholder={"Moema-SP"}
            maxLength={9}
            editable={true}
            fieldWidth={45}
          />
        </ContainerInput>

        <Botao>
          <ButtonTitle>Salvar</ButtonTitle>
        </Botao>

        <BotaoProfile>
          <ButtonTitle>Editar</ButtonTitle>
        </BotaoProfile>
      </Container>
    </ScrollView>
  );
};
