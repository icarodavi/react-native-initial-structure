import 'config/ReactotronConfig';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleButtonPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleButtonPress}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
