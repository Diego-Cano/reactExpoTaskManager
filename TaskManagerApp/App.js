import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskManager from './src/TaskManager';

export default function App() {
    return (
        <View style={styles.container}>
            <TaskManager />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f0f8ff'  
    }
});
