import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screen/pages/Home";
import Page1 from "./screen/pages/Page1";
import Page2 from "./screen/pages/Page2";
import Page3 from "./screen/pages/Page3";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
           }}
        />
         <Stack.Screen 
        name="Page1" 
        component={Page1} 
        options={{
          headerShown: false
         }}
        />
        <Stack.Screen 
        name="Page2" 
        component={Page2} 
        options={{
          headerShown: false
         }}
        />
          <Stack.Screen 
        name="Page3" 
        component={Page3} 
        options={{
          headerShown: false
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
