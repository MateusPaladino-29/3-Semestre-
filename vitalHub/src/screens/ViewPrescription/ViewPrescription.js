import {
  BoxAgeEmail,
  Container,
  ScrollContainer,
} from "../../components/Container/StyleContainer";
import { DescriptionPassword } from "../../components/Descriptions/Descriptions";
import { MapsImage, ViewImage } from "../../components/Images/StyleImages";
import {
  HighInputBox,
  HighInputBoxPrescription,
  HighInputBoxPrescriptionImage,
  LargeInputTextBox,
  LargeInputTextBoxPrescription,
} from "../../components/InputBox/InputBox";
import { BoxInput } from "../../components/InputBox/StyleInputBox";
import {
  TitlePrescription,
  TitleProfile,
} from "../../components/Title/StyleTitle";

import { AntDesign } from "@expo/vector-icons";

export const ViewPrescription = () => {
  return (
    <ScrollContainer>
      <Container>
        <ViewImage source={require("../../assets/ney.webp")} />

        <TitlePrescription> Dr Neymar Jr</TitlePrescription>

        <BoxAgeEmail>
          <DescriptionPassword description={"Cliníco geral"} />
          <DescriptionPassword description={"CRM-15286"} />
        </BoxAgeEmail>

        <HighInputBoxPrescription
          fieldHeight={350}
          placeholderTextColor={"#4E4B59"}
          textLabel={"Descrição da consulta"}
          placeholder={"Descrição"}
          editable={true}
        />

        <LargeInputTextBoxPrescription
          placeholderTextColor={"#4E4B59"}
          textLabel={"Diagnóstico do paciente"}
          placeholder={"Diagnóstico"}
          editable={true}
        />

        <HighInputBoxPrescription
          fieldHeight={350}
          placeholderTextColor={"#4E4B59"}
          textLabel={"Prescrição médica"}
          placeholder={"Prescriçao médica"}
          editable={true}
        />

        <HighInputBoxPrescriptionImage
          fieldHeight={350}
          placeholderTextColor={"#4E4B59"}
          textLabel={"Exames médicos"}
          placeholder={"[ ! ]Nenhuma foto informada"}
          editable={false}
        />
      </Container>
    </ScrollContainer>
  );
};
