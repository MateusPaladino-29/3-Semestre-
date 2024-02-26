import { StatusBar } from "react-native";
import {
  Container,
  ContainerCepCidade,
} from "../../components/Container/StyleContainer";
import { AgeTextCard } from "../../components/Descriptions/StyledDescriptions";
import { MapsImage } from "../../components/Images/StyleImages";
import { InputBox } from "../../components/InputBox/InputBox";
import { Title, TitleMap } from "../../components/Title/StyleTitle";

export const ConsultLocalization = () => {
  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <MapsImage source={require("../../assets/Maps.png")} />

      <TitleMap>Clínica Natureh</TitleMap>
      <AgeTextCard>São Paulo, SP</AgeTextCard>

      <InputBox
        placeholderTextColor={"#33303E"}
        textLabel={"Endreço"}
        placeholder={"Ex. Rua Hemifesrio 510"}
        // keyboardType="numeric"
        editable={true}
      />

      <ContainerCepCidade>
        <InputBox
          placeholderTextColor={"#33303E"}
          textLabel={"Número"}
          placeholder={"Ex.510"}
          keyboardType="numeric"
          editable={true}
          fieldWidth={40}
        />
        <InputBox
          placeholderTextColor={"#33303E"}
          textLabel={"Bairro"}
          placeholder={"Ex.Guarulhos"}
          editable={true}
          fieldWidth={40}
        />
      </ContainerCepCidade>
    </Container>
  );
};
