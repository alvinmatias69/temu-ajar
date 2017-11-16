import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
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
        <TouchableHighlight onPress={this.props.onPress}>
          <Icon name={this.props.icon} size={24} color={this.props.background === 'dark' ? 'white' : 'black'} />
        </TouchableHighlight>
        <Text style={styles.description}>{this.props.title}</Text>
      </View>
    )
  }
}
