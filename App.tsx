// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ExpoRouter } from 'expo-router';
import { useFonts } from 'expo-font';

export default function App() {
   const [fontsLoaded] = useFonts({
     'Education Childsmart': require('./assets/fonts/Education Childsmart.ttf'),
     'Fredoka Medium': require('./assets/fonts/Fredoka Medium.ttf'),
     'Fredoka_Bold': require('./assets/fonts/Fredoka_Bold.ttf'),
     'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
   });

   if (!fontsLoaded) {
     return <AppLoading />;
   }

  return (
    <PaperProvider>
      <ExpoRouter />
    </PaperProvider>
  );
}