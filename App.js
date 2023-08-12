import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.trim().length > 0) {
      setCourseGoals(oldState => oldState.concat({ data: enteredGoalText, id: Math.random().toString() }))
    }
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(oldState => oldState.filter(item => item.id !== id))
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Button title='Add new goal' color={'#5e0acc'} onPress={startAddGoalHandler} />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={
              itemData => <GoalItem text={itemData.item.data} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
            }
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

//* In IOS Text does not get rounded corners, it must be wrapped in a View
//* in React Native, styles do not cascade
//* For lazy loading a scrollable list, use FlatList instead of ScrollView 
//* react-devtools are dope

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 10
  },
});
