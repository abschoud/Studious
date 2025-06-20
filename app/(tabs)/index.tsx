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

export default function HomeScreen() {
  const router = useRouter();
  const data = [
      { id: '1', title: 'Maths', description: 'Maths is the study of numbers, quantities, shapes, and patterns.', backgroundImage: require('../../assets/images/maths.jpg') },
      { id: '2', title: 'English', description: 'English is a language spoken by millions of people around the world.', backgroundImage: require('../../assets/images/english.png') },
      { id: '3', title: 'Science', description: 'Science is the study of the natural world through experimentation.', backgroundImage: require('../../assets/images/science.png') },
    ];

   const handleCardPress = (id: string) => {
       switch (id) {
         case '1':
           router.push('detail/CardMaths');
           break;
         case '2':
           router.push('detail/CardEnglish');
           break;
         case '3':
           router.push('detail/CardScience');
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
         <ThemedText style={[styles.text, { margin: 10 }]} type="title">Your Child's Subjects</ThemedText>
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
