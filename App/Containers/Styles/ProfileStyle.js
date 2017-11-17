import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: Colors.snow,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  avatar: {
    width: Metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  formField: {
    marginVertical: 15,
    marginHorizontal: Metrics.screenWidth * 0.045
  },
  title: {
    fontSize: 14,
    opacity: 0.54,
    marginBottom:5
  },
  content: {
    fontSize: 18
  }
})
