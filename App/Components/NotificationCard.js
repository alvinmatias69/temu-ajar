import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/NotificationCardStyle'

import UserAvatar from 'react-native-user-avatar'

export default class NotificationCard extends Component {
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
        <UserAvatar name={this.props.name[0]} size={48} />
        <View style={styles.description}>
          <Text style={styles.content}><Text style={styles.name}>{this.props.name}</Text> telah menerima penawaranmu</Text>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
      </View>
    )
  }
}
