import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
  },
  paddedContainer: {
    paddingHorizontal: Metrics.screenWidth * 0.045
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15
  },
  formField: {
    marginVertical: 10
  },
  placeholder: {
    fontSize: 12,
    opacity: 0.54
  }
})
