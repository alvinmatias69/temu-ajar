import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/CardStyle'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Card extends Component {
  // Prop type warnings
  static propTypes = {
    subject: PropTypes.string
  }

  // Defaults for props
  static defaultProps = {
    subject: 'undefined' 
  }

  render () {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.card}>
          <View style={styles.subject}>
            <View style={styles.nameView}>
              <Text style={styles.nameText}>
                {this.props.subject}
              </Text>
            </View>

            <View style={styles.more}>
              <Icon name="ellipsis-h" size={16} color="#000" />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.date}>{this.props.date}</Text>

            <View style={styles.description}>
              <View style={styles.descView}>
                <Text style={styles.descTitle}>Budget Range</Text>
                <Text style={styles.budget}>Rp {this.props.budget}</Text>
              </View>
        
              <View style={styles.descView}>
                <Text style={styles.descTitle}>Bidder</Text>
                <Text style={styles.bidder}>{this.props.bidder} Calon Pengajar</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
