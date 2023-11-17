import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image,  View,TouchableOpacity } from "react-native";
import * as Screens from "../Screens";
import StackScreen from "../Screens/StackScreen/StackScreen";
import Strings from "../constants/Strings";
import imagePath from "../constants/imagePath";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: true,
          tabBarStyle: {},
        }}
      >

        
        <Tab.Screen
          name={Strings.HOME}
          component={Screens.Home}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: 20,
                    height: 18,
                    tintColor: focused ? "red" : "grey",
                  }}
                  source={imagePath.icHome1}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name={Strings.GROUPS}
          component={Screens.Groups}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Image
                    style={{
                      height: 18,
                      width: 20,
                      tintColor: focused ? "red" : "grey",
                    }}
                    source={imagePath.icGroups}
                  />
                  <TouchableOpacity>
                    <Image
                      style={{
                        height: 60,
                        width: 60,
                        marginTop: -60,
                        marginLeft: 30,
                        position: "absolute",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 50,
                        borderWidth:7,
                        borderColor:"#F5F5F5",
                        borderRadius:32
                       
                        
                      }}
                      source={imagePath.icPersons}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={Strings.MESSAGE}
          component={Screens.Message}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    height: 18,
                    width: 20,
                    tintColor: focused ? "red" : "grey",
                  }}
                  source={imagePath.icChat}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Strings.PROFILE}
          component={StackScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    height: 18,
                    width: 20,
                    tintColor: focused ? "red" : "grey",
                  }}
                  source={imagePath.icProfilePerson}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
