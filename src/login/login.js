import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";

import { Constants } from 'expo';


export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.logincontainer}>
        <Text style={styles.appName}> Rehbar</Text>
      <CredentialsInputView />
      </View>
    );
  }
}

class CredentialsInputView extends React.Component {

 onPressLogin() {
  Alert.alert('on Press!');
 }

 onPressRegistration() {
   Alert.alert('registration');
 }

    render() {
      return (
        <View style={styles.credsForm}>
        <TextInput style={styles.username}
          placeholder="username"
          onChangeText={(text) => this.setState({text})}
        />

        <TextInput style={styles.username}
          placeholder="password"
          onChangeText={(text) => this.setState({text})}
        />

        <View style={styles.buttonContainer}>

          <Button style={styles.loginButton}
          onPress={this.onPressLogin}
          title="Login"
          />

          <Button style={styles.loginButton}
          onPress={this.onPressRegistration}
          title="Register"
          />
        </View>
        </View>
      );
    }




}


const styles = StyleSheet.create({
  appName: {
    fontSize: 30,
    color: '#2874A6',
    textDecorationColor: 'red'
  },
  logincontainer: {
    alignItems: 'center',
    paddingTop: 100,
    flex: 1
  },
  username: {
    height: 30,
    width: 200,
    color: '#008000',
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    margin: 10,
    padding: 4
  },
  credsForm: {
    marginTop: 50,
    backgroundColor: 'rgba(214, 219, 223,0.4)',
    height: 'auto',
  },
  buttonContainer: {
     flexDirection: 'row',
     width: 'auto',
     justifyContent: 'space-between'
  },
  loginButton: {
    color: '#rgb(160, 64, 0)',
    fontSize: 10
  }
});
