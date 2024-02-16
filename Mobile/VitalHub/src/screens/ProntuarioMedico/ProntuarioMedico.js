import {
  BoxDescricao,
  BoxInputDiagnostico,
} from "../../Components/BoxInput/IndexBoxInput";
import { Botao, BotaoProfile } from "../../Components/Button/StylesButton";
import {
  Container,
  ScrollView,
} from "../../Components/Container/stylesContainer";
import { Cancelar, CancelarProntuario } from "../../Components/Link/IndexLink";
import { LogoPaciente } from "../../Components/Logo/StylesLogo";
import { DescricaoEmail } from "../../Components/Texts/StylesText";
import { ButtonTitle, Title } from "../../Components/Title/StylesTitle";

export const ProntuarioMedico = () => {
  return (
    
    <ScrollView>
      <Container>
        <LogoPaciente source={require("../../assets/Carlos.jpg")} />
        <Title>Carlos Roque</Title>
        <DescricaoEmail>22 anos Carlos.Roque@gmail.com</DescricaoEmail>

        <BoxDescricao
          textLabel={"Descricao da consulta"}
          placeholder={"Descricao"}
          placeholderTextColor={"#34898F"}
          editable={true}
        />

        <BoxInputDiagnostico
          textLabel={"Diagnostico do Paciente"}
          placeholder={"Diagnostico"}
          placeholderTextColor={"#34898F"}
          editable={true}
        />

        <BoxDescricao
          textLabel={"Prescricao Medica"}
          placeholder={"Prescicao Medica"}
          placeholderTextColor={"#34898F"}
          editable={true}
        />

        <Botao>
          <ButtonTitle>Salvar</ButtonTitle>
        </Botao>

        <CancelarProntuario />
      </Container>
    </ScrollView>
  );
};
