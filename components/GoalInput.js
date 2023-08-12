import { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal, Image } from "react-native";

const GoalInput = ({ onAddGoal, onCancel, visible }) => {

  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (text) => {
    setEnteredGoalText(text)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
    onCancel()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')} 
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder='Your course goal'
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add goal'
              onPress={addGoalHandler}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="Cancel" 
              onPress={onCancel} 
              color='#f31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: '#120438',
    width: '100%',
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})

export default GoalInput;