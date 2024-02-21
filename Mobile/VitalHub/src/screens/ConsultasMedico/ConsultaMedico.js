import { StatusBar } from "react-native";
import {
  BoxDataHome,
  BoxDateCancel,
  BoxFlexCard,
  BoxHeader,
  BoxHome,
  BoxTextDescricao,
  BoxTextPaciente,
  ButtonHomeContainer,
  CardBox,
  Container,
  ContainerHome,
  DateHome,
  FilterAppointment,
  FlatContainer,
  MoveIconBell,
  ScrollView,
} from "../../Components/Container/stylesContainer";
import { LogoHome } from "../../Components/Logo/StylesLogo";
import {
  ButtonTitleHome,
  NameTitle,
  Title,
  TitleCard,
  TitleMonth,
  WelcomeTitle,
} from "../../Components/Title/StylesTitle";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  ButtonHome,
  WhiteButtonHome,
} from "../../Components/Button/StylesButton";
import { Header } from "../../Components/Header/StylesHeader";
import { CalendarHome } from "../../Components/Calendar/IndexCalendar";
import { BtnListAppointment } from "../../Components/Button/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import {
  Descricao,
  DescricaoHour,
  DescricaoIdade,
  DescricaoStatus,
} from "../../Components/Texts/StylesText";
import { Cancelar, CancelarCard } from "../../Components/Link/IndexLink";
import { Card } from "../../Components/Card/Cards";

export const ConsultaMedico = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  const [selected, setSelected] = useState({
    agendadas: true,
    realizadas: false,
    canceladas: false,
  });

  const image = require("../../assets/Neymar.png");

  const dataItens = [
    {
      id: "fsdfsfsdf",
      hour: "14:00",
      image: image,
      name: "Niccole Sarge",
      age: "22 anos",
      routine: "Rotina",
      status: "r",
    },
    {
      id: "sdfsdf",
      hour: "15:00",
      image: image,
      name: "Richard Kosta",
      age: "28 anos",
      routine: "Urgência",
      status: "a",
    },
    {
      id: "asdas",
      hour: "17:00",
      image: image,
      name: "Neymar Jr",
      age: "28 anos",
      routine: "Rotina",
      status: "c",
    },
  ];

  const Check = (data) => {
    if (data.status === "a" && selected.agendadas) {
      return true;
    }
    if (data.status === "r" && selected.realizadas) {
      return true;
    }
    if (data.status === "c" && selected.canceladas) {
      return true;
    }
    return false;
  };

  const data = dataItens.filter(Check);

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

      <FlatContainer
        data={data}
        renderItem={({ item }) => (
          <Card
            hour={item.hour}
            name={item.name}
            age={item.age}
            routine={item.routine}
            url={image}
            status={item.status}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <CardBox>
        <LogoHome source={require("../../assets/Paciente.png")} />

        <BoxFlexCard>
          <TitleCard>Niccole Sarga</TitleCard>
          <BoxTextPaciente>
            <DescricaoIdade> 22 anos </DescricaoIdade>
            <DescricaoStatus> Rotina </DescricaoStatus>
          </BoxTextPaciente>

          <BoxDateCancel>
            <DateHome>
              <AntDesign name="clockcircle" size={15} color="#49B3BA" />
              <DescricaoHour>15:00</DescricaoHour>
            </DateHome>
            <CancelarCard />
          </BoxDateCancel>
        </BoxFlexCard>
      </CardBox> */}
    </ScrollView>
  );
};
