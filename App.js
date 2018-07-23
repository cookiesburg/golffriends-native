import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import UserList from './src/components/UserList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Users'} />
        <UserList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
