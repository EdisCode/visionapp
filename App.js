import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;