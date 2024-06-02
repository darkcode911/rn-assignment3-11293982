// Category.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Category = ({ title, tasks, image }) => (
  <View style={styles.category}>
    <View style={styles.categoryTextContainer}>
      <Text style={styles.categoryText}>{title}</Text>
      <Text style={styles.categoryTasks}>{tasks}</Text>
    </View>
    <Image source={image} style={styles.categoryImage} />
  </View>
);

const styles = StyleSheet.create({
  category: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 10,
    elevation: 2,
    marginRight: 30,
    position: 'relative',
  },
  categoryTextContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  categoryImage: {
    width: 130,
    height: 130,
    marginTop: 40,
    alignSelf: 'center',
  },
});

export default Category;