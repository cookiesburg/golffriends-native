import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const UserDetail = (props) => {
  return(
      <Card>
        <CardSection>
          <Text>{props.user.name}</Text>
        </CardSection>
      </Card>
    );
}

export default UserDetail;
