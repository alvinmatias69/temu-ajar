import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  form: {
    height: Metrics.screenHeight*0.05,
    marginBottom: Metrics.screenHeight*0.03
  },
  active: {
    borderColor: Colors.lightBlue,
    borderBottomWidth: 2
  },
  inactive: {
    borderColor: '#d8d8d8',
    borderBottomWidth: 1,
  }
})
