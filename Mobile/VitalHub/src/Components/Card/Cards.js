import { FontAwesome6 } from "@expo/vector-icons";
import { BoxDateCancel, ConsultDateGrey, DateHome } from "../Container/stylesContainer";
import { AntDesign } from "@expo/vector-icons";
import { CancelarCard } from "../Link/IndexLink";
import { DescricaoHour, HourTextGrey } from "../Texts/StylesText";

export const Card = ({ url, name, age, routine, hour, status }) => {
  const Check = () => {
    if (status === "a") {
      return (
        <BoxDateCancel>
          <DateHome>
            <AntDesign name="clockcircle" size={15} color="#49B3BA" />
            <DescricaoHour>{hour}</DescricaoHour>
          </DateHome>

          <CancelarCard />
        </BoxDateCancel>
      );
    } else if (status === "r") {
      return (
        <BoxDateCancel>
          <ConsultDateGrey>
            <FontAwesome6 name="clock" size={15} color="#4E4B59" />

            <HourTextGrey>{hour}</HourTextGrey>
          </ConsultDateGrey>

          <SeeRecord text={"Ver prontuario"} onPressAppointment={""} />
        </BoxDateCancel>
      );
    } else if (status === "c") {
      return (
        <BoxDateCancel>
          <ConsultDateGrey>
            <FontAwesome6 name="clock" size={15} color="#4E4B59" />

            <HourTextGrey>{hour}</HourTextGrey>
          </ConsultDateGrey>
        </BoxDateCancel>
      );
    }
    // return (
    //     <BoxDateCancel>

    //     <ConsultDateGrey>

    //         <FontAwesome6 name="clock" size={15} color="#4E4B59" />

    //         <HourTextGrey>{hour}</HourTextGrey>

    //     </ConsultDateGrey>

    //     <CancelCard>Ver Prontuario</CancelCard>

    // </BoxDateCancel>
    // )
  };

  return (
    <CardContainer>
      <BoxCard>
        <ImageCard source={url} />

        <BoxTextCard>
          <NameCard>{name}</NameCard>

          <AgeCard>
            <AgeTextCard>{age}</AgeTextCard>

            <PointCard source={require("../../assets/PointCard.png")} />

            <RoutineTextCard>{routine}</RoutineTextCard>
          </AgeCard>

          {Check()}
        </BoxTextCard>
      </BoxCard>

      {/* {Check()} */}
    </CardContainer>
  );
};
