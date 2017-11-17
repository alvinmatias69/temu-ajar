import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TutorThreadStyle'

import ThreadDescription from '../Components/ThreadDescription'
import Form from '../Components/Form'
import RoundedButton from '../Components/RoundedButton'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class TutorThread extends Component {
  nextForm = (ref) => {
    this.refs[ref].refs[ref].focus()
  }

  constructor (props) {
    super(props)
    this.nextForm = this.nextForm.bind(this)
  }

  render () {
    return (
      <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        <ThreadDescription 
          subject="KALKULUS"
          title="Ajarin Kalkulus Tentang Integral"
          description="Saya ngga ngerti bagian integral yang lipat dua, sama turunan juga sedikit bingung"
          date="Kamis, 26 Oktober 2017"
          location="Kost Rajawali Jalan Cikupa No. 52 Komplek Mawar, Sukabirus"
          budget="20k - 50k"
        />
        
        <View style={styles.content}>
          <Text style={styles.title}>Ajukan Penawaran</Text>

          <View style={styles.formField}>
            <Text style={styles.placeholder}>Bid Price</Text>
            <Form 
                ref="price"
                label="price"
                keyboardType="numeric"
                onSubmitEditing={() => this.nextForm("facility")}
              />
          </View>

          <View style={styles.formField}>
            <Text style={styles.placeholder}>Fasilitas</Text>
            <Form 
                ref="facility"
                label="facility"
                autoCapitalize="sentences"
                onSubmitEditing={() => this.nextForm("info")}
              />
          </View>

          <View style={styles.formField}>
            <Text style={styles.placeholder}>Informasi Tambahan</Text>
            <Form 
                ref="info"
                label="info"
                autoCapitalize="sentences"
                returnKeyType="done"
              />
          </View>
          
          <RoundedButton
            text="SUBMIT"
            onPress={() => this.props.navigation.navigate('HomeTutor')}
          />
        </View>
      </KeyboardAwareScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TutorThread)
