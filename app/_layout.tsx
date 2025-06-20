// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
// import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
// import { useColorScheme } from '@/hooks/useColorScheme';
import DrawerContent from '@/components/drawer';
// import TabsLayout from './tabs/_layout'; // Import the TabsLayout
// import Header from '@/components/Header'; // Import Header
// import LogoutPopup from '@/components/LogoutPopup'
// import { DrawerActions } from '@react-navigation/native'; // Import DrawerActions
// import { useHeaderTitle } from '@/context/HeaderTitleContext'; // Import the context
// import { HeaderTitleProvider } from '@/context/HeaderTitleContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: '(tabs)',
};

export default function Layout() {
//  const { headerTitle } = useHeaderTitle(); // Access the headerTitle state
  return (
    /* <HeaderTitleProvider> */
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <LogoutPopup /> */}
      <Drawer
        screenOptions={{
          drawerItemStyle: { display: 'none' },
          headerTitleStyle:{
            fontFamily: 'cursive', // Replace with your desired font family
            color: 'white', // Replace with your desired color
            fontWeight: 900,
            fontSize: 35,
            marginBottom: 8
          },
          headerStyle: {
            backgroundColor: '#005a32', // Replace with your desired color
          },
          drawerInactiveTintColor: 'grey', // Replace with your desired inactive color
//           headerTitle: () => headerTitle, // Use a function to return the header title
        }} >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            title: 'Dashboard',
            drawerLabel: 'Home',
            drawerItemStyle: { display: 'flex' },
            drawerLabelStyle: {
              fontFamily: 'cursive', // Replace with your desired font family
              color: 'black', // Replace with your desired color
              fontWeight: 900 }
          }}
        />
        <Drawer.Screen
          name="drawertabs/settings" // This is the name of the page and must match the url from root
          options={{
            title: 'Settings',
            drawerLabel: 'Settings',
            drawerItemStyle: { display: 'flex' },
            drawerLabelStyle: {
              fontFamily: 'cursive', // Replace with your desired font family
              color: 'black', // Replace with your desired color
              fontWeight: 900 }
          }}
        />
        <Drawer.Screen
          name="drawertabs/help" // This is the name of the page and must match the url from root
          options={{
            title: 'Help',
            drawerLabel: 'Help',
            drawerItemStyle: { display: 'flex' },
            drawerLabelStyle: {
              fontFamily: 'cursive', // Replace with your desired font family
              color: 'black', // Replace with your desired color
              fontWeight: 900 }
          }}
        />
        <Drawer.Screen
          name="drawertabs/switchaccount" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Switch Account',
            drawerItemStyle: { display: 'flex' },
            drawerLabelStyle: {
              fontFamily: 'cursive', // Replace with your desired font family
              color: 'black', // Replace with your desired color
              fontWeight: 900 }
          }}
        />
        <Drawer.Screen
          name="drawertabs/logout" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Log Out',
            drawerItemStyle: { display: 'flex' },
            drawerLabelStyle: {
              fontFamily: 'cursive', // Replace with your desired font family
              color: 'black', // Replace with your desired color
              fontWeight: 900 }
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
    /* </HeaderTitleProvider> */
  );
}

export function CardPages() {
  return (
    <Stack>
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen name="CardMaths" options={{ headerShown: false }} />
         <Stack.Screen name="CardEnglish" options={{ headerShown: false }} />
         <Stack.Screen name="CardScience" options={{ headerShown: false }} />
    </Stack>
  );
}

