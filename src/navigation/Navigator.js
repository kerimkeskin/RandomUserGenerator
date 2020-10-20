import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();
const Navigator = ({}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
