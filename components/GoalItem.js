import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={onDeleteItem.bind(this, id)}
        // for IOS:
        style={({pressed}) => {
          return pressed && styles.pressedItem
        }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
})

export default GoalItem;