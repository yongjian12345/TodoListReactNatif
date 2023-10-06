import { StyleSheet, Text, FlatList, TouchableHighlight } from 'react-native';
import useTodoList from '../hooks/useTodoList';
/*
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        todo: 'TODO 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        todo: 'TODO 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        todo: 'TODO 3',
    },
];*/

const TodoListItem = ({item, onPress}) => (
    <TouchableHighlight onPress={onPress}>
        <Text style={styles.todoListItem}>{item.todo}</Text>
    </TouchableHighlight>
);

export default function TodoList({onPress}) {
    const {todoList, isLoading, loadTodoList} = useTodoList();
    const renderItem = ({item}) => {
        return (
            <TodoListItem onPress={() => {onPress(item.id)}} item={item}/>
        );
    };
    
    return (
        <FlatList
        style={styles.flatlist}
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={loadTodoList}/>
    );
}
const styles = StyleSheet.create({
    flatlist: {
    flex: 1,
    },
    todoListItem: {
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth: 1,
        margin: 1,
        padding: 20,
    }
});