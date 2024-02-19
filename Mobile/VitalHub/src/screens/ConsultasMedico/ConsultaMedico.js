import { StatusBar } from "react-native";
import {
  BoxDataHome,
  BoxHeader,
  BoxHome,
  ButtonHomeContainer,
  Container,
  ContainerHome,
  FilterAppointment,
  MoveIconBell,
  ScrollView,
} from "../../Components/Container/stylesContainer";
import { LogoHome } from "../../Components/Logo/StylesLogo";
import {
  ButtonTitleHome,
  NameTitle,
  Title,
  TitleMonth,
  WelcomeTitle,
} from "../../Components/Title/StylesTitle";
import { Ionicons } from "@expo/vector-icons";
import {
  ButtonHome,
  WhiteButtonHome,
} from "../../Components/Button/StylesButton";
import { Header } from "../../Components/Header/StylesHeader";
import { CalendarHome } from "../../Components/Calendar/IndexCalendar";
import { BtnListAppointment } from "../../Components/Button/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { Descricao, DescricaoIdade, DescricaoStatus } from "../../Components/Texts/StylesText";
import { Cancelar } from "../../Components/Link/IndexLink";

export const ConsultaMedico = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  return (
    <ScrollView>
      <Header>
        {/* <StatusBar translucent backgroundColor="transparent" barStyle="light-content" /> */}

        <BoxHome>
          <LogoHome source={require("../../assets/Header.png")} />

          <BoxDataHome>
            <WelcomeTitle>Bem Vindo</WelcomeTitle>
            <NameTitle>Dr.Claudio</NameTitle>
          </BoxDataHome>
        </BoxHome>

        <MoveIconBell>
          <Ionicons name="notifications" size={25} color="white" />
        </MoveIconBell>
      </Header>

      <CalendarHome />

      <FilterAppointment>
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "Realizadas"}
          onPress={() => setStatusLista("Realizadas")}
        />
        <BtnListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "Canceladas"}
          onPress={() => setStatusLista("Canceladas")}
        />
      </FilterAppointment>

      <CardBox>
        <LogoHome source={require("../../assets/Paciente.png")} />
        <BoxTextCard>
          <Title></Title>
           <BoxTextDescricao>
            <DescricaoIdade>22 anos</DescricaoIdade>
            <DescricaoStatus>Rotina </DescricaoStatus>
           </BoxTextDescricao>

           <BoxDateCancel>
            <DateHome></DateHome>

            <CancelarCard/>
           </BoxDateCancel>
        </BoxTextCard>
      </CardBox>
    </ScrollView>
  );
};
