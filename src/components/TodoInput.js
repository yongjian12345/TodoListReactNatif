import { StyleSheet, View, TextInput, Button ,ActivityIndicator} from 'react-native';
import { useState } from 'react';
import useTodoInput from '../hooks/useTodoInput';
import AppTheme from '../styles/AppTheme';
export default function TodoInput() {
    const {
        todo,
        isInvalid,
        isSaving,
        handleChange,
        handleSubmit,
    } = useTodoInput();
    
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Nom de la tâche" 
            style={[styles.input, (isInvalid) ? styles.inputInvalid : '']} 
            editable={!isSaving}
            value={todo}
            onChangeText={(text)=> handleChange({value: text})}/>
            {isSaving ?
<ActivityIndicator size="small" color={AppTheme.primaryColor} /> :
            <Button title="Ajouter" 
            onPress={handleSubmit}/>}
        </View>
    );
    }
    const styles = StyleSheet.create({
        input: AppTheme.input,
        inputInvalid: AppTheme.inputInvalid,
        inputContainer: {
        padding: AppTheme.paddingScreen,
    },
});