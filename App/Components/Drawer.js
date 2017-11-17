import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { View, Text } from 'react-native'
import styles from './Styles/DrawerStyle'

export default class Drawer extends Component {
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
  //
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Drawer Component</Text>
      </View>
    )
  }
}
