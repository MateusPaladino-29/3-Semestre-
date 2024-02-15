import {
  BoxDescricao,
  BoxInput,
} from "../../Components/BoxInput/IndexBoxInput";
import {
  Container,
  ScrollView,
} from "../../Components/Container/stylesContainer";
import { Cancelar } from "../../Components/Link/IndexLink";
import { DescricaoEmail } from "../../Components/Texts/StylesText";

export const ProntuarioMedico = () => {
  <ScrollView>
    <Container>
      <LogoPaciente source={require("../../assets/Carlos.jpg")} />
      <Title>Carlos Roque</Title>
      <DescricaoEmail>22 anos Carlos.Roque@gmail.com</DescricaoEmail>

      <BoxDescricao
        textLabel={"Data de nascimento"}
        placeholder={"29/09/2000"}
        keyType="numeric"
        maxLength={8}
        editable={true}
      />

      <BoxInput
        textLabel={"Data de nascimento"}
        placeholder={"29/09/2000"}
        keyType="numeric"
        maxLength={8}
        editable={true}
      />

      <BoxDescricao
        textLabel={"Data de nascimento"}
        placeholder={"29/09/2000"}
        keyType="numeric"
        maxLength={8}
        editable={true}
      />

      <Botao>
        <ButtonTitle>Salvar</ButtonTitle>
      </Botao>

      <Cancelar />
    </Container>
  </ScrollView>;
};
