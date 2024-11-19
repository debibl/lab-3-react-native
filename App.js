import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from './screens/AboutScreen.jsx';
import LanguagesScreen from './screens/LanguagesScreen.jsx';
import NotFoundScreen from './screens/NotFoundScreen.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'О Себе') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Мои языки') {
              iconName = focused ? 'code-slash' : 'code-slash-outline';
            } else if (route.name === 'Не найдено') {
              iconName = focused ? 'alert-circle' : 'alert-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='О Себе' component={AboutScreen} />
        <Tab.Screen name='Мои языки' component={LanguagesScreen} />
        <Tab.Screen name='Не найдено' component={NotFoundScreen} />
      </Tab.Navigator>

      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
