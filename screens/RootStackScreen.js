import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GetStartedScreen from './GetStartedScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="GetStartedScreen" component={GetStartedScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>

);


export default RootStackScreen;