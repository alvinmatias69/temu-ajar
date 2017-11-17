import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BidDetailStyle'

import RoundedButton from '../Components/RoundedButton'

import UserAvatar from 'react-native-user-avatar'
import Icon from 'react-native-vector-icons/MaterialIcons'

class BidDetail extends Component {
  constructor (props) {
    super(props)

    let rate = 4
    let stars = []

    for (let i=0; i<rate; i++) {
      stars.push(<Icon key={i} name="star" color="#f6b151" size={25} />)
    }

    this.state = {
      rate: stars
    }
  }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.centerised}>
          <UserAvatar name="A" size={80} />
          <Text style={styles.name}>Arief Bijaksana</Text>
          <View style={styles.rate}>
            {this.state.rate}
          </View>
        </View>

        <View style={styles.description}>
          <Text style={[styles.baseFont, styles.title]}>Nama Kelas</Text>
          <Text style={[styles.baseFont, styles.class]}>Ajarin Kalkulus Tentang Integral</Text>
          <Text style={[styles.baseFont, styles.title]}>Bid Price</Text>
          <Text style={styles.baseFont}>Rp 40.000</Text>
          <Text style={[styles.baseFont, styles.title]}>Fasilitas</Text>
          <Text style={styles.baseFont}>Papan Tulis Mini, Buku Soal</Text>
          <Text style={[styles.baseFont, styles.title]}>Informasi Tambahan</Text>
          <Text style={styles.baseFont}>Lorem ipsum dolor sit amet sed apelicus mor zabarus sal sed manaro tado</Text>
        </View>

        <View style={styles.centerised}>
          <RoundedButton 
            text="TERIMA TAWARAN"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('HomeStudent')}
          />
          <TouchableHighlight onPress={() => this.props.navigation.goBack(null)}>
            <Text style={styles.back}>KEMBALI</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BidDetail)
