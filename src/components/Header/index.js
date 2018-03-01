import 'config/ReactotronConfig';

import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.pop()} style={styles.iconButton}>
      <Text>Back</Text>
    </TouchableOpacity>
    <Text>Header Title</Text>
  </View>
);

Header.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func,
  }).isRequired,
};

export default Header;
