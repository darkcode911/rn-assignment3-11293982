// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const profileImage = require('./assets/profile.png');

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.headerText}>Hello, Devs</Text>
      <Text style={styles.subHeaderText}>14 tasks today</Text>
    </View>
    <TouchableOpacity style={styles.profileIcon}>
      <Image source={profileImage} style={styles.profileImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;