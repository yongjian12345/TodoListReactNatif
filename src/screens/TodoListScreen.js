import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, SafeAreaView } from 'react-native';
import TodoInput from '../components/TodoInput';
import AppTheme from '../styles/AppTheme';
import TodoList from '../components/TodoList';
export default function TodoListScreen() {
    return (
        <SafeAreaView style={styles.container}>
           <TodoInput />
           <TodoList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    input: AppTheme.input,
    inputContainer: {
    padding: AppTheme.paddingScreen,
    },
  });