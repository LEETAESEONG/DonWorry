import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import FriendMessageScreen from '../../screens/friends/FriendMessageScreen';
import DutchPayRequestScreen from '../../screens/consumptions/DutchPayRequestScreen';
const Stack = createStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, freezeOnBlur: true }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          headerTintColor: '#808080',
          headerBackTitleVisible: false,
          headerTitle: '회원가입',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Message"
        component={FriendMessageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DutchPayRequest"
        component={DutchPayRequestScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
