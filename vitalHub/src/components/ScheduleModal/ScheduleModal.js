import { ButtonLargeSelect } from "../Button/Button";
import { CardCancelLess } from "../Descriptions/Descriptions";
import { LargeInputBoxModal } from "../InputBox/InputBox";

export const ScheduleModal = ({ visible, setShowModal = null, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ScheduleModalContainer>
        <ModalContent>
          <TitleModalSchedule>Agendar Consulta</TitleModalSchedule>

          <TitleModalSchedule>Qual o Nivel da Consulta?</TitleModalSchedule>

          <BoxButtonLevel>
            <ButtonLevel text={"Rotina"} />
            <ButtonLevel text={"Exame"} />
            <ButtonLevel text={"Urgencia"} />
          </BoxButtonLevel>

          <LargeInputBoxModal
            fieldWidth={100}
            placeholderTextColor={"#34898F"}
            textLabel={"Informe a localização desejada"}
            placeholder={"Informe a localização"}
            editable={true}
          />

          <ButtonLargeSelect onPress={""} text={"continuar"} />

          <CardCancelLess
            onPressCancel={() => setShowModal(false)}
            text={"Cancelar"}
          />
        </ModalContent>
      </ScheduleModalContainer>
    </Modal>
  );
};
