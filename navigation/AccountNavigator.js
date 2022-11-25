import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../app/screens/AccountScreen';

const AccountStack = createStackNavigator();

function AccountNavigator() {

  return (
     <AccountStack.Navigator>
       <AccountStack.Screen 
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: 'Account' }}
       />
       
       </AccountStack.Navigator>
        
  )
}
export default AccountNavigator;

