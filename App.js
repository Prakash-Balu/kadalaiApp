import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {StartPage} from "./Screens/StartPage"
import StartPage from './Screens/StartPage';
import TermsService from './Screens/TermsService';
import Verification from './Screens/Verification';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="StartupPage">
        <Stack.Screen name="StartupPage" component={StartPage} />
        <Stack.Screen name="TermsService" component={TermsService}/>
        <Stack.Screen name="Verification" component={Verification}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;