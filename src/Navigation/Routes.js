import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splashscreen from '../screen/Splashscreen';

import Slidestart from '../screen/Slidestart';
import Login from '../screen/Login';
import OtpScreen from '../screen/OtpScreen';
import SignupScreen from '../screen/SignupScreen';
import Home from '../screen/Home';
import BottomTab from './BottomTab';
import PersonalDetails from '../screen/PersonalDetails';
import Security from '../screen/Security';
import PrivacyPolicy from '../screen/PrivacyPolicy';
import HelpandSupport from '../screen/HelpandSupport';
import Residencyapplications from '../screen/Residencyapplications';
import TravelBooking from '../screen/TravelBooking';
import OnlineService from '../screen/OnlineService';
import ServiceDetails from '../screen/ServiceDetails';
import OfflineService from '../screen/OfflineService';
import ChatScreen from '../screen/ChatScreen';
// import BookingSuccessful from '../screen/BookingSuccessful';

// import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Slidestart" component={Slidestart} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />

        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BottomTab" component={BottomTab} />

        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupport} />
        <Stack.Screen name="TravelBooking" component={TravelBooking} />
        <Stack.Screen name="OnlineService" component={OnlineService} />
        <Stack.Screen name="OfflineService" component={OfflineService} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen
          name="Residencyapplications"
          component={Residencyapplications}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      

      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
