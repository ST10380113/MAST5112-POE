import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App';
import BookHistory from './BookHistory';

const Stack = createStackNavigator();

const App = () => {

  //the side naviagtion bar is set to be closed as a default
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const toggleSideNav = () => {
   setSideNavOpen(!sideNavOpen);
  };

 const booksHistory = [
    { title: 'Title', author: 'Author Name', genre: 'Genre', pages: 0 },
    { title: 'Title', author: 'Author Name', genre: 'Genre', pages: 0 },
    { title: 'Title', author: 'Author Name', genre: 'Genre', pages: 0 },
 ];

 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        //the array is being passed as a naviagtion parameter
        <Stack.Screen name="History" component={BookHistory} initialParams={{ booksHistory }} />
      </Stack.Navigator>
    </NavigationContainer>
 );
};


export default App;
