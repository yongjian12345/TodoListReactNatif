import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Todo from "../components/Todo";

export default function TodoListScreen({route}) {

return (
    <View>
        <Todo id={route.params?.id} />
    </View>
);
}
