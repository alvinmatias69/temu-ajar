import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/LeftHeaderStyle'

// import library
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LeftHeader extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Icon name='bars' size={24} color='white' />
        <Text style={styles.description}>Home</Text>
      </View>
    )
  }
}