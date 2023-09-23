import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

export type TabsStackParamsList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamsList>();

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icons name="home" {...props} />,
        }}
      />
      <TabsStack.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icons name="cart" {...props} />,
        }}
      />
      <TabsStack.Screen
        name="Payment"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icons name="wallet" {...props} />,
        }}
      />
      <TabsStack.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Icons name="account" {...props} />,
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({});
