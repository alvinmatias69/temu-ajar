import React, { Component } from 'react'
import { 
  View, 
  Text, 
  KeyboardAvoidingView 
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// components
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/EmptyStateScreenStyle'

class EmptyStateScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hello Mat</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet lepero andr colora dalora bud sed use apalecus maracos el capo</Text>
        <RoundedButton 
          text="mulai belajar"
          style={styles.button}
          onPress={() => this.props.navigation.navigate('HomeStudent')}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(EmptyStateScreen)
