import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, Picker } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CreateThreadStyle'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Form from '../Components/Form'
import FullButton from '../Components/FullButton'

class CreateThread extends Component {
  nextForm = (ref) => {
    this.refs[ref].refs[ref].focus()
  }

  constructor (props) {
    super(props)
    this.nextForm = this.nextForm.bind(this)
  }

  render () {
    return (
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.paddedContainer}>
            <Text style={styles.title}>Buat Thread</Text>

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Judul</Text>
              <Form 
                  ref="judul"
                  label="judul"
                  autoCapitalize="sentences"
                  onSubmitEditing={() => this.nextForm("subjek")}
                />
            </View>

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Subjek</Text>
              <Form 
                  ref="subjek"
                  label="subjek"
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
                  onSubmitEditing={() => this.nextForm("date")}
                />
            </View>

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Tanggal</Text>
              <Form 
                  ref="date"
                  label="date"
                  autoCapitalize="sentences"
                  onSubmitEditing={() => this.nextForm("location")}
                />
            </View>

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Lokasi Belajar</Text>
              <Form 
                  ref="location"
                  label="location"
                  autoCapitalize="words"
                  onSubmitEditing={() => this.nextForm("total")}
                />
            </View>

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Jumlah Murid</Text>
              <Form 
                  ref="total"
                  label="total"
                  autoCapitalize="none"
                  keyboardType="numeric"
                  onSubmitEditing={() => this.nextForm("min")}
                />          
            </View> 

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Minimal Budget</Text>
              <Form 
                  ref="min"
                  label="min"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  onSubmitEditing={() => this.nextForm("max")}
                />          
            </View> 

            <View style={styles.formField}>
              <Text style={styles.placeholder}>Maksimal Budget</Text>
              <Form 
                  ref="max"
                  label="max"
                  keyboardType="numeric"
                  autoCapitalize="none"
                />          
            </View>      
          </View>

          <FullButton 
            text="SAVE"
            onPress={() => this.props.navigation.navigate('HomeStudent')}
            style={styles.button}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateThread)
