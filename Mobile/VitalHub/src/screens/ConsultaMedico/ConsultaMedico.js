import { StatusBar } from "react-native";
import { BoxDataHome, BoxHome, ButtonHomeContainer,  Container,  MoveIconBell,  ScrollView,} from "../../Components/Container/stylesContainer";
import { LogoHeader } from "../../Components/Logo/StylesLogo";
import { Header } from "../../Components/Header/StylesHeader";
import { ButtonTitle, ButtonTitleHome, NameTitle, TitleMonth, WelcomeTitle } from "../../Components/Title/StylesTitle";
import { Ionicons } from '@expo/vector-icons';
import Calendar from "../../Components/Calendar/StylesCalendar";
import { ButtonHome,  WhiteButtonHome } from "../../Components/Button/StylesButton"


export const ConsultaMedico = () => {
  return (
    <ScrollView>
      <Container>
        <Header>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />

          <BoxHome>
            <LogoHeader source={require("../../assets/Neymar.png")} />

            <BoxDataHome>
              <WelcomeTitle>Bem Vindo</WelcomeTitle>

              <NameTitle>Dr.Claudio</NameTitle>
            </BoxDataHome>
          </BoxHome>

          <MoveIconBell>
            <Ionicons  name="notifications" size={25} color="white" />
          </MoveIconBell>
        </Header>

        <TitleMonth>Novembro 2023</TitleMonth>

        <Calendar/>

        <ButtonHomeContainer>
        
        <ButtonHome>
            <ButtonTitleHome>Agendados</ButtonTitleHome>
        </ButtonHome>

        <WhiteButtonHome>
            <ButtonTitleHome>Realizados</ButtonTitleHome>
        </WhiteButtonHome>

        <WhiteButtonHome>
            <ButtonTitleHome>Canceladas</ButtonTitleHome>
        </WhiteButtonHome>

          
        </ButtonHomeContainer>
      </Container>
    </ScrollView>
  );
};
