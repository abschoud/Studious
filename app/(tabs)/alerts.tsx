import { Image, StyleSheet, Platform, ScrollView, View, FlatList } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabBar } from '@/components/TabBar';
//import { CardComponent } from '@/components/CardComponent';
import CardComponent from '../../components/CardComponent';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Alerts() {
  const router = useRouter();
    const data = [
        { id: '1', title: 'Announcement', description: 'Attention all - school will be closed on Friday due to heavy snowfall', backgroundImage: require('../../assets/images/announce.png') },
        { id: '2', title: 'Homework', description: 'Your child has been set new English homework', backgroundImage: require('../../assets/images/hwk.png') },
        { id: '3', title: 'Homework', description: 'Your child has been set new Science homework', backgroundImage: require('../../assets/images/hwk.png') },
        { id: '4', title: 'Absence', description: 'Your child was not recorded for attendance this morning', backgroundImage: require('../../assets/images/attend.png') },
        { id: '5', title: 'Announcement', description: 'New app update released today - bug fixes and optimisation', backgroundImage: require('../../assets/images/announce.png') },
      ];

     const handleCardPress = (id: string) => {
         switch (id) {
           case '1':
             router.push('alerts/Announcement1');
             break;
           case '2':
             router.push('alerts/Homework1');
             break;
           case '3':
             router.push('alerts/Homework2');
             break;
           case '4':
             router.push('alerts/Absence1');
             break;
           case '5':
             router.push('alerts/Announcement2');
             break;
           default:
             router.push(`/${id}`);
             break;
         }
     };

  return (
      <ScrollView style={{ backgroundColor: '#fef9e0' }}>
       <View style={styles.contentContainer}>
         <ThemedView style={styles.titleContainer}>
           <ThemedText style={[styles.text, { margin: 10 }]} type="title">Your Alerts</ThemedText>
         </ThemedView>

         <View style={styles.container}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <CardComponent
                    title={item.title}
                    description={item.description}
                    backgroundImage={item.backgroundImage} // Pass backgroundImage prop
                    onPress={() => handleCardPress(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
         </View>
       </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    textDecorationLine: 'underline', // Add underline style
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  contentContainer: {
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,   // Add vertical padding (optional)
  },
  container: {
    flex: 1,
    padding: 8,
  }
});

