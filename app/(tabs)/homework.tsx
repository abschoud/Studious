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

export default function Homework() {
  const router = useRouter();
    const data = [
        { id: '1', title: 'Maths - Complete', description: 'Complete Algebra Worksheet 2\n\nDue: Tuesday 5th December 2024', backgroundImage: require('../../assets/images/maths.jpg') },
        { id: '2', title: 'English - Incomplete', description: 'Write an essay on any theme in Of Mice and Men\n\nDue: Wednesday 11th December 2024', backgroundImage: require('../../assets/images/english.png') },
        { id: '3', title: 'Maths - Incomplete', description: 'Revise for Trigonometry test\n\nDue: Monday 9th December 2024', backgroundImage: require('../../assets/images/maths.jpg') },
        { id: '4', title: 'Science - Incomplete', description: 'Complete the experiment write-up for the titration experiment done in class\n\nDue: Friday 13th December 2024', backgroundImage: require('../../assets/images/science.png') },
      ];

     const handleCardPress = (id: string) => {
         switch (id) {
           case '1':
             router.push('homeworks/maths1');
             break;
           case '2':
             router.push('homeworks/english1');
             break;
           case '3':
             router.push('homeworks/maths2');
             break;
           case '4':
             router.push('homeworks/science1');
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
           <ThemedText style={[styles.text, { margin: 10 }]} type="title">Your Homework</ThemedText>
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
