import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import SpendScreen from '../../screens/bottomTabs/SpendScreen';
import AssetScreen from '../../screens/bottomTabs/AssetScreen';
import ComparisonScreen from '../../screens/bottomTabs/ComparsionScreen';
import FriendScreen from '../../screens/bottomTabs/FriendScreen';

type RootTabParamList = {
  Spend: { refresh: boolean };
  Asset: { refresh: boolean };
  Comparison: {
    friendPk: string;
  };
  Friend: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Asset" // Asset으로 변경
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 95,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 5 : 0,
        },
        tabBarItemStyle: {
          paddingBottom: 1,
        },
        tabBarIconStyle: {
          marginBottom: -10,
        },
      }}
    >
      {/* Home 탭 제거 */}
      <Tab.Screen
        name="Asset"
        component={AssetScreen}
        options={{
          title: '자산',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="account-balance-wallet"
              color={color}
              size={size * 1.5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Spend"
        component={SpendScreen}
        options={{
          title: '소비',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="credit-card" color={color} size={size * 1.5} />
          ),
        }}
      />
      <Tab.Screen
        name="Comparison"
        component={ComparisonScreen}
        options={{
          title: '비교',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="pie-chart" color={color} size={size * 1.25} />
          ),
        }}
      />
      <Tab.Screen
        name="Friend"
        component={FriendScreen}
        options={{
          title: '친구',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people-alt" color={color} size={size * 1.5} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
export { RootTabParamList };
