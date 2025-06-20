// components/CardComponent.tsx
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity, StyleSheet, Text, ImageBackground, View } from 'react-native';

interface CardComponentProps {
  title: string;
  description: string;
  backgroundImage: any; // Add backgroundImage prop
  onPress: () => void;
}

export default function CardComponent({ title, description, backgroundImage, onPress }:
 CardComponentProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={backgroundImage} style={styles.card} resizeMode="cover">
        <View style={styles.cardOverlay}> {/* Add cardOverlay style */}
          <Card.Content style={styles.cardContent}> {/* Add cardContent style */}
            <Text style={styles.title}>{title}</Text>
            <Paragraph style={styles.description}>{description}</Paragraph> {/* Add description style */}
          </Card.Content>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    backgroundColor: 'rgba(244, 255, 242, 1)',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden', // Clip the image to the card's border radius
  },
  cardOverlay: {
    flex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Apply tint to the entire card
    borderRadius: 20, // Match the card's border radius
//     shadowColor: 'rgba(255, 255, 255, 1)',
//     shadowOpacity: 1,
//     shadowRadius: 20,
  },
  title: {
     fontWeight: 'bold',
     fontFamily: 'fredoka',
     fontSize: 24, // Adjust the font size as needed
     marginBottom: 20, // Space between title and description
     marginTop: 20, // Space between title and description
     color: 'black', // Set text color to black for better visibility
     textShadowColor: 'white', // Shadow color
     textShadowRadius: 3, // Shadow blur radius
     textDecorationLine: 'underline', // Add underline style
 },
  description: {
    fontWeight: 'bold',
    color: 'black', // Set text color to black for better visibility
    textShadowColor: 'white', // Shadow color
    textShadowRadius: 3, // Shadow blur radius
    marginBottom: 20, // Space between title and description
  },
});

export default CardComponent;