import React, { Component } from 'react';
import { View, Text, ReactNative } from 'react-native';
import axios from 'axios';

class UserList extends Component {
  state = {
    isLoaded: false,
    users: [],
  }

  componentDidMount() {
    axios.get('https://golf-friends-api.herokuapp.com/api/v1/users')
      .then(response => this.setState({users: response.data, isLoaded: true }));
  }

  renderUsers() {
    return this.state.users.map(user => {
      <Text>{user.name}</Text>
    })
  }

  render() {
    { if (this.state.isLoaded === false) return <Text>loading...</Text>; }
    return(
      <View >
        { this.renderUsers() }
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export default UserList;
