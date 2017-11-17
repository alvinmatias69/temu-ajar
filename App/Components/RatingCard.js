import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/RatingCardStyle'

import UserAvatar from 'react-native-user-avatar'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class RatingCard extends Component {
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

    console.log(props)

    let rate = []

    for (let i=0; i<props.star; i++) {
      rate.push(<Icon key={i} name="star" size={16} color="#f6b151" />)
    }

    this.state = {
      rate: rate
    }
  }

  render () {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <UserAvatar name={this.props.name[0]} size={40} />        
          </View>
          
          <View style={styles.bidder}>
            <Text style={styles.name}>{this.props.name}</Text>
            <View style={styles.rate}>
              {this.state.rate}
            </View>
          </View>

          <View style={styles.price}>
            <Text style={styles.priceTitle}>Bid Price</Text>
            <Text style={styles.priceValue}>Rp {this.props.price}.000</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
