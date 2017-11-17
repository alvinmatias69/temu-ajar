import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.lightBlue,
    shadowColor: 'transparent',
  },
  title: {
    color: Colors.snow
  },
  headerBackOnly: {
    backgroundColor: Colors.snow,
    shadowColor: 'transparent',
    borderWidth: 0
  }
})
