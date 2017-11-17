import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ThreadDescriptionStyle'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ThreadDescription extends Component {
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

  constructor (props) {
    super(props)
    let bidder = <View />
    if (props.bidder) {
      bidder = (
        <View>
          <View style={styles.icon}>
            <Icon name="person" color="#000" size={18}/>
          </View>
          <View style={styles.vertical}>
            <Text style={styles.subtitle}>Bidder</Text>
            <Text style={styles.descriptionText}>7 Calon Pengajar</Text>
          </View>
        </View>
      )
    }
    this.state = {
      bidder: bidder
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{this.props.subject}</Text>
        </View>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
        <View style={styles.horizontal}>
          <View style={styles.icon}>
            <Icon name="insert-invitation" color="#000" size={18}/>
          </View>
          <Text style={styles.descriptionText}>{this.props.date}</Text>
        </View>
        <View style={styles.horizontal}>
          <View style={styles.icon}>
            <Icon name="location-on" color="#000" size={18}/>
          </View>
          <Text style={styles.descriptionText}>{this.props.location}</Text>
        </View>
        <View style={styles.horizontal}>
          <View style={styles.icon}>
            <Icon name="attach-money" color="#000" size={18}/>
          </View>
          <View style={styles.vertical}>
            <Text style={styles.subtitle}>Budget Range</Text>
            <Text style={styles.descriptionText}>Rp {this.props.budget}</Text>
          </View>
          {this.state.bidder}
        </View>
      </View>
    )
  }
}
