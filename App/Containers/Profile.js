import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserAvatar from 'react-native-user-avatar'

// Styles
import styles from './Styles/ProfileStyle'

class Profile extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <UserAvatar name="A" size={80} />
        </View>

        <View style={styles.formField}>
          <Text style={styles.title}>Nama Lengkap</Text>
          <Text style={styles.content}>Andy Zuckerberg</Text>
        </View>
      
        <View style={styles.formField}>
          <Text style={styles.title}>NIM</Text>
          <Text style={styles.content}>1301161322</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.title}>Nomor Handphone</Text>
          <Text style={styles.content}>081390158210</Text>
        </View>

        <View style={styles.formField}>
          <Text style={styles.title}>Alamat</Text>
          <Text style={styles.content}>Jalan Cikupa No. 52 Komplek Mawar, Bandung, Jawa Barat 40521</Text>
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
