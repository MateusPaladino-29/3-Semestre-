import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PatientConsultation } from "../PatientConsultation/PatientConsultation";
import { PatientProfile } from "../PatientProfile/PatientProfile";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { ContentIcon, TextIcon } from "./Style";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="PatientConsultation"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "PatientConsultation") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color="#4E4B59" />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else 

          {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />
                {focused && <TextIcon>Perfil</TextIcon>}
              </ContentIcon>
            );
          }
        },
      })}
    >
      {/* //Realizar um Ternario ?? */}

      <BottomTab.Screen
        name="PatientConsultation"
        component={PatientConsultation}
      />
      <BottomTab.Screen name="PatientProfile" component={PatientProfile} />

      {/* // finalizar o Ternario :: */}
    </BottomTab.Navigator>
  );
};
