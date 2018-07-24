import React, { Component } from 'react';
import { View, Text } from 'react-native';

const UserDetail = (props) => {
  return(
      <View >
        <Text>{props.user.name}</Text>
      </View>
    );
}

export default UserDetail;
