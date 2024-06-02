// SearchBar.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const filterIcon = require('../assets/filtericon.png');
const lensIcon = require('../assets/searchicon.png');

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.inputWrapper}>
      <Image source={lensIcon} style={styles.lensIcon} />
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
    <TouchableOpacity style={styles.filterIcon}>
      <Image source={filterIcon} style={styles.filterImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  lensIcon: {
    width: 20, // Adjust the size as needed
    height: 20,
    marginRight: 8,
  },
  filterIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0522f',
    borderRadius: 16,
    marginLeft: 16,
  },
  filterImage: {
    width: 30,
    height: 30,
  },
});

export default SearchBar;