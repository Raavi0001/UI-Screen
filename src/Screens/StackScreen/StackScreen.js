import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationString from "../../Navigations/navigationString";
import EditProfile from "../EditProfile/editProfile";
import MyProfile from "../MyProfile/MyProfile";
import imagePath from "../../constants/imagePath";
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name={navigationString.MYPROFILE}
        component={MyProfile}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      />

      <Stack.Screen
        name={navigationString.EDITPROFILE}
        component={EditProfile}
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default StackScreen;
