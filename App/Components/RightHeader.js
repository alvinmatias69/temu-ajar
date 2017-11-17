import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/RightHeaderStyle'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default class RightHeader extends Component {
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
          <Icon name="notifications" color="#FFF" size={26} />
        </TouchableHighlight>
      </View>
    )
  }
}
