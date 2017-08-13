import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from "react-native";

import { Constants } from 'expo';
import { TabNavigator } from "react-navigation"

// import LoginScreen from './src/login/login';
import LoginScreen from './src/login/login'


class Rehbar extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}
//
class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',

  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'red',
  },
});
//
 const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Login: {
    screen: LoginScreen,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <MyApp />
      // </View>
      <LoginScreen />
    );
  }
}
