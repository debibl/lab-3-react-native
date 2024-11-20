import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        headerStyle: {
          backgroundColor: 'tomato',
          height: 50,
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      <Tabs.Screen
        name='about'
        options={{
          title: 'Обо мне',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='languages'
        options={{
          title: 'Мои навыки',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
