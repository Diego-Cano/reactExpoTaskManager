import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');

    const addTask = () => {
        const newTask = {
            id: Date.now(),  // unique id based on timestamp
            title: taskTitle,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setTaskTitle(''); 
    };

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Task Manager</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task title"
                value={taskTitle}
                onChangeText={setTaskTitle}
            />
            <Button title="Add Task" onPress={addTask} />
            <ScrollView style={styles.scrollView}>
                {tasks.map((task) => (
                    <View key={task.id} style={task.completed ? styles.completedTask : styles.task}>
                        <Text style={task.completed ? styles.completedText : styles.taskText}>{task.title}</Text>
                        <Button title="Toggle" onPress={() => toggleTaskCompletion(task.id)} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0E0E6',
        padding: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#4682b4'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    scrollView: {
        flex: 1
    },
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#ffffff',
        padding: 10
    },
    completedTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#e6e6fa',  
        padding: 10
    },
    taskText: {
        fontSize: 16
    },
    completedText: {
        fontSize: 16,
        textDecorationLine: 'line-through'  
    }
});

export default TaskManager;
