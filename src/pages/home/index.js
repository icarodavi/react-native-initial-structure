import 'config/ReactotronConfig';
import React, { Component } from 'react';

import { View } from 'react-native';

import Header from 'components/Header';

// import styles from './styles';

export default class Home extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />,
  };

  render() {
    return (
      <View />
    );
  }
}
