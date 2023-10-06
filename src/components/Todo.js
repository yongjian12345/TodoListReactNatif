import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import AppTheme from "../styles/AppTheme";
import useTodo from "../hooks/useTodo";

export default function Todo({ id }) {
    const {todo, isLoading} = useTodo(id);
    return (
        <View style={styles.todo}>
            {isLoading ? (
        <ActivityIndicator size="large" color={AppTheme.primaryColor} />
        ) : (
        <Text>{todo.todo}</Text>
        )}
        </View>
    );
};
const styles = StyleSheet.create({
    todo: {
        padding: AppTheme.paddingScreen,
    },
});