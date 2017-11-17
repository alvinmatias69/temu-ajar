import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { 
  View, 
  Text,
  TextInput
} from 'react-native'
import styles from './Styles/FormStyle'

export default class Form extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  static defaultProps = {
    returnKeyType: "next",
    autoCapitalize: "none",
    keyboardType: "default",
    clearButtonMode: "while-editing",
    secureTextEntry: false,
    autoFocus: false
  }

  constructor (props) {
    super(props)
    this.state = {
      stateBorder: styles.inactive
    }
  }

  render () {
    return (
      <TextInput
        style={[styles.form, this.state.stateBorder]}
        ref={this.props.label}
        placeholder={this.props.placeholder}
        returnKeyType={this.props.returnKeyType ? this.props.returnKeyType : this.defaultProps.returnKeyType}
        keyboardType={this.props.keyboardType ? this.props.keyboardType : this.defaultProps.keyboardType}
        clearButtonMode={this.props.clearButtonMode ? this.props.clearButtonMode : this.defaultProps.clearButtonMode}
        autoCapitalize={this.props.autoCapitalize ? this.props.autoCapitalize : this.defaultProps.autoCapitalize}
        secureTextEntry={this.props.secureTextEntry ? true : false}
        autoFocus={this.props.autoFocus ? true : false}
        onFocus={() => {
          this.setState({
            stateBorder: styles.active
          })
        }}
        onBlur={() => {
          this.setState({
            stateBorder: styles.inactive
          })
        }}
        onSubmitEditing={this.props.onSubmitEditing}
      />
    )
  }
}
