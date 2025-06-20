//tsx
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function LogoutPopup({ onClose, isVisible }) { // Add isVisible prop
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>This is a simple modal</Text>
        <Pressable onPress={onClose}>
          <MaterialIcons name="close" color="#fff" size={22} />
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalText: {
    fontSize: 20,
    color: 'white',
  },
});