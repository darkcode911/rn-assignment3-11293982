// App.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import OngoingTask from './components/OngoingTask';

const woman = require('./assets/womanperson.png');
const studyImage = require('./assets/studyimage.png');
const meetingImage = require('./assets/meetingimage.png');
const collaborateImage = require('./assets/collaborateimage.png');
const eventsImage = require('./assets/eventsimage.png');
const planImage = require('./assets/planimage.png');
const calendarImage = require('./assets/calendarimage.png');
const bountyHuntImage = require('./assets/bountyhuntimage.png');

const App = () => {
  const categories = [
    { title: 'Exercise', tasks: '12 Tasks', image: woman },
    { title: 'Study', tasks: '12 Tasks', image: studyImage },
    { title: 'Meeting', tasks: '8 Tasks', image: meetingImage },
    { title: 'Collaborate', tasks: '5 Tasks', image: collaborateImage },
    { title: 'Events', tasks: '10 Tasks', image: eventsImage },
    { title: 'Plan', tasks: '7 Tasks', image: planImage },
    { title: 'Calendar', tasks: '6 Tasks', image: calendarImage },
    { title: 'Bounty Hunt', tasks: '9 Tasks', image: bountyHuntImage },
  ];

  const ongoingTasks = [
    'Web Development task', 'Mobile app Development task', 'Code boot task', 'Python task',
    'DEV task', 'Semester Project Workshop', 'Cyber task', 'Saturn maths task',
    'Dr Ammah Lecture', 'Orm task', 'React Native Studies', 'Software Engineering Task',
    'Algorithm Task', ' code Hunt', 'Smart Code Development'
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Text style={styles.sectionHeader}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category, index) => (
          <Category key={index} title={category.title} tasks={category.tasks} image={category.image} />
        ))}
      </ScrollView>
      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionHeader}>Ongoing Task</Text>
        {ongoingTasks.map((task, index) => (
          <OngoingTask key={index} task={task} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 16,
    backgroundColor: '#FAF3EB',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  ongoingTasks: {
    marginTop: 24,
    marginBottom: 16,
  },
});

export default App;