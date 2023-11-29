import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const fetchBookData = async () => {
 return [
    { id: 1, title: 'Book 1', genre: 'Fantasy' },
    { id: 2, title: 'Book 2', genre: 'Science Fiction' },
    { id: 3, title: 'Book 3', genre: 'Mystery' },
    { id: 4, title: 'Book 4', genre: 'Romance' },
    { id: 5, title: 'Book 5', genre: 'Thriller' },
    { id: 6, title: 'Book 6', genre: 'Horror' },
    { id: 7, title: 'Book 7', genre: 'Non-fiction' },
    { id: 8, title: 'Book 8', genre: 'Biography' },
 ];
};

const GenreScreen = () => {
 const [genreCounts, setGenreCounts] = useState({});

 useEffect(() => {
    fetchBookData().then((books) => {
      const counts = {};
      books.forEach((book) => {
        counts[book.genre] = (counts[book.genre] || 0) + 1;
      });
      setGenreCounts(counts);
    });
 }, []);
 const [sideNavOpen, setSideNavOpen] = useState(false);
 const toggleSideNav = () => {
 setSideNavOpen(!sideNavOpen);
 };
 return (
    <View style={styles.container}>

    <TouchableOpacity onPress={toggleSideNav}>
         <Image source={sideNavOpen ? require('./x.png') : require('./NAV.png')} style={styles.toggleButton} />
      </TouchableOpacity>

     <View style={[styles.sideNav, { display: sideNavOpen ? 'flex' : 'none' }]}>
      <View style={styles.sideNav}>

       <Image source={require('./navilogo.jpg')} style={styles.sideNavImage}/>

       <Text style={styles.sideNavTitle}>Books4U</Text>

       <TouchableOpacity style={styles.sideNavItem}>
         <Text style={styles.sideNavText}>Home</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>New Book</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.sideNavItem} >
         <Text style={styles.sideNavText}>Book History</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.sideNavItem} >
        <Text style={styles.sideNavText}>Genre Tracker</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Total Books Read for each Genre</Text>
      {Object.entries(genreCounts).map(([genre, count]) => (
        <View key={genre} style={styles.genreItem}>
          <Text style={styles.genreName}>{genre}</Text>
          <Text style={styles.genreCount}>{count}</Text>
        </View>
      ))}
    </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 genreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
 },
 genreName: {
    fontSize: 18,
 },
 genreCount: {
    fontSize: 18,
    fontWeight: 'bold',
 },
 sideNav:{
  flex: 1,
   backgroundColor: '#F0F0F0', 
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   paddingTop: 60, 
   paddingHorizontal: 10
 },
 sideNavText:{
  fontSize: 18,
  color: 'black'
 },
 sideNavItem:{
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#CCCCCC',
 },
 sideNavTitle:{
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 20,
 },
 sideNavImage:{
  width: '103%', 
  height: 150,
  resizeMode: 'cover',
  marginBottom: 30, 
 },
 toggleButton:{
  width: 30, 
  height: 30, 
  resizeMode: 'contain',
  marginLeft: 10,
 }
});

export default GenreScreen;