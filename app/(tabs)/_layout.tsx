import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { height: 80 },  // Adjust the height here
        tabBarLabelStyle: { paddingBottom: 0 },  // Adjust label padding if needed
      }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      
      {/* hide Login page from tab bar */}
      {/* <Tabs.Screen
        name="login"
        options={{
        title: 'login',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
        }}
      /> */}
      {/* TODO: DELETE THE BELOW CODE FOR FINAL BOILERPLATE */}
      {/* <Tabs.Screen
        name="index - default"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="explore - default"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="layout - default"
        options={{
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
