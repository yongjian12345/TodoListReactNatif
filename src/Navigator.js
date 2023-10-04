import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoListScreen from './screens/TodoListScreen';
import AppTheme from './styles/AppTheme';
import TodoContextProvider from './contexts/TodoContext';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <TodoContextProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name="TodoList" component={ TodoListScreen } />
                </Stack.Navigator>
            </NavigationContainer>
        </TodoContextProvider>
    );
};
const screenOptions = {
    headerStyle: {
    backgroundColor: AppTheme.primaryColor,
    },
    headerTitleStyle: {
    fontWeight: 'bold',
    },
};