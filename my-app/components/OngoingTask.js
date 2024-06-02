// OngoingTask.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OngoingTask = ({ task }) => (
  <TouchableOpacity style={styles.task}>
    <Text style={styles.taskText}>{task}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#fff',
    padding: 60,
    borderColor: '#e8d1ba',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 16,
    elevation: 2,
  },
  taskText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OngoingTask;