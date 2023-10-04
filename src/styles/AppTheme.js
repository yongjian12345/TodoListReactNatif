import { Platform } from 'react-native';
export default {
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    inputInvalid: {
        borderColor: '#C30000',
        },
    paddingScreen: 20,
    primaryColor: Platform.OS === 'ios' ? '#77e08c' : '#37a7ee',
};