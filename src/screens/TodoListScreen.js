import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, SafeAreaView } from 'react-native';
import TodoInput from '../components/TodoInput';
import AppTheme from '../styles/AppTheme';
import TodoList from '../components/TodoList';
import { useNavigation } from '@react-navigation/native';

export default function TodoListScreen() {
  const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
           <TodoInput />
           <TodoList onPress={(id) => navigation.navigate('Todo', {id: id})}/>
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